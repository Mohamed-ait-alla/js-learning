/*
 * Workshop: Build an fCC Forum Leaderboard
 */

const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';
const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInMls = now - past;

  const seconds = Math.floor(diffInMls / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
}

function viewCount(nbOfViews) {
  return nbOfViews >= 1000 ? `${Math.floor(nbOfViews / 1000)}k` : nbOfViews;
}

function forumCategory(categoryId) {
  if (Object.hasOwn(allCategories, categoryId)) {
    const selectedCategory = allCategories[categoryId];
    return `<a class="category ${selectedCategory.className}" href="${forumCategoryUrl}${selectedCategory.className}/${categoryId}">${selectedCategory.category}</a>`;
  }
  return `<a class="category general" href="${forumCategoryUrl}general/${categoryId}">General</a>`;
}

function avatars(posters, users) {
    return posters
        .map(poster => {
            const user = users.find(u => u.id === poster.user_id);
            if (!user) return "";

            let avatar = user.avatar_template.replace("{size}", "30");

            if (avatar.startsWith("/")) {
                avatar = avatarUrl + avatar;
            }

            return `<img src="${avatar}" alt="${user.name}">`;
        })
        .join("");
}

function showLatestPosts(apiData) {
  const users = apiData.users;
  const topicList = apiData.topic_list;
  const topics = topicList.topics;

  topics.forEach((topic) => {
    postsContainer.innerHTML += `<tr>
                                    <td>
                                      <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>
                                      ${forumCategory(topic.category_id)}
                                    </td>
                                    <td>
                                      <div class="avatar-container">${avatars(topic.posters, users)}</div>
                                    </td>
                                    <td>${topic.posts_count - 1}</td>
                                    <td>${topic.views}</td>
                                    <td>${timeAgo(topic.bumped_at)}</td>
                                  </tr>`;
  })
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const fetchedData = await res.json();
    showLatestPosts(fetchedData);

  } catch (err) {
    console.log(err);
  }
}

fetchData();