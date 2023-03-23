
export function POSTS(id) {
 return {
   url: `posts`,
 };
}

export function POST_COMMENTS(id) {
 return {
   url: `posts/${id}/comments`,
 };
}

export function USERS(id) {
 return {
   url: `users`,
 };
}

export function USER_SELECIONADO(id) {
 return {
   url: `users/${id}`,
 };
}