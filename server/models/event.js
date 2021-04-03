exports.event = function Event(name, description, points, organizer, duration, registrations, location) {
    this.name = name;
    this.description = description;
    this.points = points;
    this.organizer = organizer;
    this.duration = duration;
    this.registrations = registrations;
    this.location = location;
}

var duration = {
    startTime: String,
    endTime: String,
}