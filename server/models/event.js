export default function Event(name, description, points, organizer, duration) {
    this.name = name;
    this.description = description;
    this.points = points;
    this.organizer = organizer;
    this.duration = duration;
}

var duration = {
    startTime: String,
    endTime: String,
}