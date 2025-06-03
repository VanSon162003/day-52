document.addEventListener("DOMContentLoaded", function () {
    // Get comment ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const commentId = urlParams.get("id");

    // Set edit button URL
    const editButton = document.getElementById("editButton");
    editButton.href = `edit-comment.html?id=${commentId}`;

    // Load comment details
    loadCommentDetails(commentId);

    // Load activity history
    loadActivityHistory(commentId);

    // Setup action buttons
    setupActionButtons(commentId);
});

// Load comment details
function loadCommentDetails(commentId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    // Mock comment data
    let commentData;

    // Different mock data based on comment ID
    switch (commentId) {
        case "1":
            commentData = {
                id: commentId,
                content:
                    "Great article! These tips have really helped me improve my productivity.",
                author: "Sarah Johnson",
                email: "sarah.johnson@example.com",
                ip: "192.168.1.100",
                date: "2023-07-16T14:30:00",
                status: "approved",
                post: {
                    id: 1,
                    title: "10 Tips for Better Productivity",
                },
                replies: [],
            };
            break;
        case "4":
            commentData = {
                id: commentId,
                content:
                    "Check out my website at http://spamlink.com for more productivity hacks!",
                author: "Unknown User",
                email: "spam@example.com",
                ip: "192.168.1.104",
                date: "2023-07-18T09:15:00",
                status: "rejected",
                post: {
                    id: 1,
                    title: "10 Tips for Better Productivity",
                },
                replies: [],
            };
            break;
        case "5":
            commentData = {
                id: commentId,
                content:
                    "Morning meditation has changed my life. I'd add that to the list of habits.",
                author: "Jennifer Lopez",
                email: "jennifer@example.com",
                ip: "192.168.1.105",
                date: "2023-07-18T10:45:00",
                status: "pending",
                post: {
                    id: 3,
                    title: "5 Morning Habits of Successful People",
                },
                replies: [],
            };
            break;
        default:
            commentData = {
                id: commentId,
                content:
                    "I disagree with point #3. In my experience, starting with the most difficult task first is more effective.",
                author: "Michael Brown",
                email: "michael.brown@example.com",
                ip: "192.168.1.102",
                date: "2023-07-17T10:15:00",
                status: "approved",
                post: {
                    id: 1,
                    title: "10 Tips for Better Productivity",
                },
                replies: [
                    {
                        id: 101,
                        content:
                            "Thanks for your input, Michael. Different approaches work for different people, and that's why we present multiple strategies.",
                        author: "Admin",
                        date: "2023-07-17T11:30:00",
                    },
                ],
            };
    }

    // Update page title and header
    document.title = `Comment by ${commentData.author} | Admin Dashboard`;
    document.getElementById(
        "itemTitle"
    ).textContent = `Comment by ${commentData.author}`;

    // Get status badge class
    let statusBadgeClass = "badge-warning";
    if (commentData.status === "approved") {
        statusBadgeClass = "badge-success";
    } else if (commentData.status === "rejected") {
        statusBadgeClass = "badge-danger";
    }

    // Format date with time
    const formattedDate = formatDate(commentData.date, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    // Create comment detail HTML
    const commentHTML = `
                    <div class="detail-section">
                        <h3>Comment Information</h3>
                        <table class="detail-table">
                            <tr>
                                <td><strong>Status:</strong></td>
                                <td><span class="badge ${statusBadgeClass}">${
        commentData.status.charAt(0).toUpperCase() + commentData.status.slice(1)
    }</span></td>
                            </tr>
                            <tr>
                                <td><strong>Author:</strong></td>
                                <td>${commentData.author}</td>
                            </tr>
                            <tr>
                                <td><strong>Email:</strong></td>
                                <td><a href="mailto:${commentData.email}">${
        commentData.email
    }</a></td>
                            </tr>
                            <tr>
                                <td><strong>IP Address:</strong></td>
                                <td>${commentData.ip}</td>
                            </tr>
                            <tr>
                                <td><strong>Date:</strong></td>
                                <td>${formattedDate}</td>
                            </tr>
                            <tr>
                                <td><strong>Post:</strong></td>
                                <td><a href="post-detail.html?id=${
                                    commentData.post.id
                                }">${commentData.post.title}</a></td>
                            </tr>
                        </table>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Comment Content</h3>
                        <div class="comment-content">
                            ${commentData.content}
                        </div>
                    </div>
                    
                    ${
                        commentData.replies.length > 0
                            ? `
                    <div class="detail-section">
                        <h3>Replies (${commentData.replies.length})</h3>
                        <div class="replies-container">
                            ${commentData.replies
                                .map(
                                    (reply) => `
                            <div class="reply">
                                <div class="reply-header">
                                    <strong>${
                                        reply.author
                                    }</strong> <span class="reply-date">${formatDate(
                                        reply.date,
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        }
                                    )}</span>
                                </div>
                                <div class="reply-content">
                                    ${reply.content}
                                </div>
                            </div>
                            `
                                )
                                .join("")}
                        </div>
                    </div>
                    `
                            : ""
                    }
                `;

    document.getElementById("itemContent").innerHTML = commentHTML;

    // Update action buttons based on status
    updateActionButtons(commentData.status);
}

// Update action buttons based on comment status
function updateActionButtons(status) {
    const approveButton = document.getElementById("approveButton");
    const rejectButton = document.getElementById("rejectButton");

    if (status === "approved") {
        approveButton.disabled = true;
        rejectButton.disabled = false;
    } else if (status === "rejected") {
        approveButton.disabled = false;
        rejectButton.disabled = true;
    } else {
        approveButton.disabled = false;
        rejectButton.disabled = false;
    }
}

// Setup action buttons
function setupActionButtons(commentId) {
    // Approve button
    document
        .getElementById("approveButton")
        .addEventListener("click", function () {
            // In a real app, this would be an API call
            console.log(`Approving comment with ID: ${commentId}`);

            // Show success message
            showMessage("actionSuccess", "Comment approved successfully", 3000);

            // Update UI
            updateActionButtons("approved");
        });

    // Reject button
    document
        .getElementById("rejectButton")
        .addEventListener("click", function () {
            // In a real app, this would be an API call
            console.log(`Rejecting comment with ID: ${commentId}`);

            // Show success message
            showMessage("actionSuccess", "Comment rejected successfully", 3000);

            // Update UI
            updateActionButtons("rejected");
        });

    // Reply button - show modal
    document
        .getElementById("replyButton")
        .addEventListener("click", async function () {
            // Show reply modal
            const result = await showModal("replyModal");

            if (result) {
                const replyText = document.getElementById("replyText").value;
                const replyAs = document.getElementById("replyAs").value;
                const notifyUser =
                    document.getElementById("notifyUser").checked;

                // In a real app, this would be an API call
                console.log(`Replying to comment ${commentId} as ${replyAs}:`, {
                    text: replyText,
                    notifyUser,
                });

                // Show success message
                showMessage("actionSuccess", "Reply sent successfully", 3000);

                // Reload comment details to show the new reply
                loadCommentDetails(commentId);
            }
        });

    // Delete button
    document
        .getElementById("deleteButton")
        .addEventListener("click", async function () {
            // Show confirmation dialog
            const result = await showConfirmDialog("confirmDeleteModal", {
                title: "Confirm Delete",
                message:
                    "Are you sure you want to delete this comment? This action cannot be undone.",
            });

            if (result) {
                // In a real app, this would be an API call
                console.log(`Deleting comment with ID: ${commentId}`);

                // Redirect back to comments list
                window.location.href = "comments.html";
            }
        });
}

// Load activity history
function loadActivityHistory(commentId) {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll use mock data

    const activityData = [
        {
            action: "Comment Submitted",
            date: "2023-07-16 14:30",
            user: "Sarah Johnson",
        },
        {
            action: "Comment Approved",
            date: "2023-07-16 15:45",
            user: "Admin",
        },
        {
            action: "Reply Added",
            date: "2023-07-17 11:30",
            user: "Admin",
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

// Show modal dialog (for reply)
async function showModal(modalId) {
    return new Promise((resolve) => {
        const modal = document.getElementById(modalId);
        modal.style.display = "block";

        const submitBtn = modal.querySelector("[data-confirm]");
        const cancelBtn = modal.querySelector("[data-cancel]");

        function cleanup() {
            modal.style.display = "none";
            submitBtn.removeEventListener("click", handleSubmit);
            cancelBtn.removeEventListener("click", handleCancel);
        }

        function handleSubmit() {
            cleanup();
            resolve(true);
        }

        function handleCancel() {
            cleanup();
            resolve(false);
        }

        submitBtn.addEventListener("click", handleSubmit);
        cancelBtn.addEventListener("click", handleCancel);
    });
}
