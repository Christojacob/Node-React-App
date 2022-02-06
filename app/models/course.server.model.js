const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courseCode: {
        type: String,
        default: ''
    },
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'Course Name cannot be blank'
    },
    section: {
        type: String,
        default: '',
        trim: true
    },
    semester: {
        type: String,
        default: '',
        trim: true
    },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});
mongoose.model('Course', CourseSchema);