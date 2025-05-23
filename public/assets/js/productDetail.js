document.addEventListener("DOMContentLoaded", function () {
    // Get item ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get("id");

    // Set edit button URL
    const editButton = document.getElementById("editButton");
    editButton.href = `edit-product.html?id=${itemId}`;

    // Load product details
    loadProductDetails(itemId);

    // Load activity history
    loadActivityHistory(itemId);
});

// Load product details
function loadProductDetails(itemId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    // Mock product data
    const itemData = {
        id: itemId,
        name: "Wireless Headphones",
        sku: "P100125",
        price: 199.99,
        stock: 75,
        category: "Electronics",
        status: "Active",
        description:
            "High-quality wireless headphones with noise cancellation and long battery life.",
        image: "https://via.placeholder.com/300",
        dateAdded: "2023-03-10",
        tags: ["electronics", "audio", "wireless"],
    };

    // Update page title and header
    document.title = `Product: ${itemData.name} | Admin Dashboard`;
    document.getElementById("itemTitle").textContent = itemData.name;

    // Create product detail HTML
    const productHTML = `
                    <div class="detail-header" style="display: flex; margin-bottom: 20px;">
                        <div style="flex: 0 0 300px;">
                            <img src="${itemData.image}" alt="${
        itemData.name
    }" style="width: 100%; border-radius: 8px;">
                        </div>
                        <div style="margin-left: 20px; flex: 1;">
                            <h2 style="margin: 0;">${itemData.name}</h2>
                            <p style="margin: 5px 0; color: #666;">SKU: ${
                                itemData.sku
                            }</p>
                            <div style="margin: 15px 0;">
                                <span class="badge badge-success">${
                                    itemData.status
                                }</span>
                                <span class="badge" style="background-color: rgba(58, 134, 255, 0.1); color: #3a86ff;">${
                                    itemData.category
                                }</span>
                            </div>
                            <h3 class="item-value" style="font-size: 24px; margin: 15px 0;">${formatCurrency(
                                itemData.price
                            )}</h3>
                            <p><strong>Stock:</strong> ${
                                itemData.stock
                            } units</p>
                            <p><strong>Date Added:</strong> ${formatDate(
                                itemData.dateAdded
                            )}</p>
                        </div>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Product Description</h3>
                        <p>${itemData.description}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Product Tags</h3>
                        <div>
                            ${itemData.tags
                                .map(
                                    (tag) => `
                                <span class="badge" style="background-color: #eee; color: #555; margin-right: 5px;">${tag}</span>
                            `
                                )
                                .join("")}
                        </div>
                    </div>
                `;

    document.getElementById("itemContent").innerHTML = productHTML;
}

// Load activity history
function loadActivityHistory(itemId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    const activityData = [
        {
            action: "Created",
            date: "2023-05-15 14:30",
            user: "Admin",
        },
        {
            action: "Updated",
            date: "2023-06-20 10:15",
            user: "John Doe",
        },
        {
            action: "Status changed to Active",
            date: "2023-06-25 09:45",
            user: "John Doe",
        },
    ];

    // Generate HTML for activity list
    const activityHTML = activityData
        .map(
            (activity) => `
                    <li style="padding: 15px 0; border-bottom: 1px solid #eee;">
                        <div style="display: flex; justify-content: space-between;">
                            <div>
                                <i class="fas fa-history" style="color: #3a86ff; margin-right: 10px;"></i>
                                <strong>${activity.action}</strong> by ${
                activity.user
            }
                            </div>
                            <div style="color: #666;">
                                ${formatDate(activity.date, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </div>
                        </div>
                    </li>
                `
        )
        .join("");

    document.getElementById("activityList").innerHTML = activityHTML;
}
