exports.UserPost = function UserPost(imageURL, task, caption, date, duration, eventType) {
    this.imageURL = imageURL;
    this.task = task;
    this.caption = caption;
    this.date = date;
    this.duration = duration;
    this.eventType = eventType;
}

var duration = {
    startTime: String,
    endTime: String,
}