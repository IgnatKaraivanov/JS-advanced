class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if (this._likes.includes(username)) {
            const indx = this._likes.indexOf(username);

            this._likes.splice(indx, 1);

            return `${username} disliked ${this.title}`;
        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.some(x => x.id === id)) {
            this._comments.push({
                id: this._comments.length + 1,
                username,
                content,
                replies: [],
            });

            return `${username} commented on ${this.title}`;
        } else {
            let indxOfComment = this._comments.indexOf(this._comments.find(x => x.id === id));

            if (this._comments[indxOfComment].replies === undefined) {
                this._comments[indxOfComment].replies = [];
            }

            this._comments[indxOfComment].replies.push({
                id: `${id}.${this._comments[indxOfComment].replies.length+1}`,
                username,
                content,
            });

            return "You replied successfully";
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments:\n`;

        if (sortingType === 'asc') {
            for (const item of this._comments) {
                result += `-- ${item.id}. ${item.username}: ${item.content}\n`;

                if (item.replies.length > 0) {
                    for (const reply of item.replies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                    }
                }
            }
        } else if (sortingType === 'desc') {
            let reversedComments = this._comments.reverse();

            for (const item of reversedComments) {
                result += `-- ${item.id}. ${item.username}: ${item.content}\n`;

                if (item.replies.length > 0) {

                    let reversedReplies = item.replies.reverse();

                    for (const reply of reversedReplies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                    }
                }
            }
        } else if (sortingType === 'username') {
            let sortedUsers = this._comments.sort((a, b) => a.username.localeCompare(b.username));

            for (const item of sortedUsers) {
                result += `-- ${item.id}. ${item.username}: ${item.content}\n`;

                if (item.replies.length > 0) {

                    let sortedReplies = item.replies.sort((a, b) => a.username.localeCompare(b.username));

                    for (const reply of sortedReplies) {
                        result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                    }
                }
            }
        }

        result = result.trimEnd();

        return result;
    }
};