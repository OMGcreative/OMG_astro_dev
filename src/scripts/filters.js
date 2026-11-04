/**
 * Projects filtering and toggle logic
 */
export const initFilters = () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-thumbnail");
    const filterToggle = document.getElementById("filter-toggle");
    const filterContainer = document.getElementById("filter-container");

    if (filterButtons.length === 0 && projectItems.length === 0) return;

    // Keep track of active filters per type
    const activeFilters = {
        category: "all",
        brand: "all",
        tag: "all",
    };

    const updateFilters = () => {
        // 1. Filter the project items
        projectItems.forEach((item) => {
            const htmlItem = item;
            const itemCategory = htmlItem.dataset.category;
            const itemBrand = htmlItem.dataset.brand;
            const itemTags = JSON.parse(htmlItem.dataset.tags || "[]");

            const matchCategory =
                activeFilters.category === "all" ||
                itemCategory === activeFilters.category;
            const matchBrand =
                activeFilters.brand === "all" ||
                itemBrand === activeFilters.brand;
            const matchTag =
                activeFilters.tag === "all" ||
                itemTags.includes(activeFilters.tag);

            if (matchCategory && matchBrand && matchTag) {
                htmlItem.style.display = "block";
            } else {
                htmlItem.style.display = "none";
            }
        });

        // 2. Update button availability (grey out ones that would result in 0 projects)
        filterButtons.forEach((button) => {
            const htmlButton = button;
            const type = htmlButton.dataset.filterType;
            const value = htmlButton.dataset.filter;

            if (value === "all") {
                htmlButton.classList.remove("disabled");
                return;
            }

            const isAvailable = Array.from(projectItems).some((item) => {
                const htmlItem = item;
                const itemCategory = htmlItem.dataset.category;
                const itemBrand = htmlItem.dataset.brand;
                const itemTags = JSON.parse(htmlItem.dataset.tags || "[]");

                const matchOtherCategory =
                    type === "category" ||
                    activeFilters.category === "all" ||
                    itemCategory === activeFilters.category;
                const matchOtherBrand =
                    type === "brand" ||
                    activeFilters.brand === "all" ||
                    itemBrand === activeFilters.brand;
                const matchOtherTag =
                    type === "tag" ||
                    activeFilters.tag === "all" ||
                    itemTags.includes(activeFilters.tag);

                let matchSelf = false;
                if (type === "category") matchSelf = itemCategory === value;
                if (type === "brand") matchSelf = itemBrand === value;
                if (type === "tag") matchSelf = itemTags.includes(value);

                return (
                    matchOtherCategory &&
                    matchOtherBrand &&
                    matchOtherTag &&
                    matchSelf
                );
            });

            if (isAvailable) {
                htmlButton.classList.remove("disabled");
            } else {
                htmlButton.classList.add("disabled");
            }
        });
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const htmlButton = button;
            if (htmlButton.classList.contains("disabled")) {
                e.preventDefault();
                return;
            }

            const type = htmlButton.dataset.filterType;
            const value = htmlButton.dataset.filter;

            if (type && value) {
                activeFilters[type] = value;

                const parentWrapper = htmlButton.parentElement;
                if (parentWrapper) {
                    parentWrapper
                        .querySelectorAll(".filter-btn")
                        .forEach((btn) => btn.classList.remove("active"));
                }
                htmlButton.classList.add("active");

                updateFilters();
            }
        });
    });

    // Toggle filter visibility
    if (filterToggle instanceof HTMLInputElement && filterContainer) {
        filterToggle.addEventListener("change", () => {
            if (filterToggle.checked) {
                filterContainer.classList.remove("is-collapsed");
            } else {
                filterContainer.classList.add("is-collapsed");
            }
        });
    }

    // Initial run
    updateFilters();
};

// Auto-initialize
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFilters);
    } else {
        initFilters();
    }
}
