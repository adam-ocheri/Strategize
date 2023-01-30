import mongoose from "mongoose";


interface IProject {
    //TODO : Should conceive these functions elsewhere
    //*IsTeamProject() : {return Members.length>1}
    //*GetSelfRole() : string ['Admin' | 'Member']

    //dummy data for now
    owner: mongoose.Schema.Types.ObjectId;
    data: string;

    //critical data
    StationType : 'Project';
    StationTypeName : string,
    ProjectName : string,
    ProjectIconImg : string
    Members : mongoose.Schema.Types.ObjectId[],
    LongTermGoals : [],//LTG,
    ProjectCalendar : Date,
    Description : string,
    Notes : string[],
    HISTORY_LTGsAchieved : []
}

const modelSchema = new mongoose.Schema<IProject>({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'post must be associated with a user ID'],
        ref: 'users'
    },
    data: {
        type: String,
        required: [true, 'This field is mandatory! please provide it in order to create a new instance of this document type!']
    },
    StationType: {
        type: String,
        //required: [true, '\'StationType\' field is mandatory! please provide it in order to create a new instance of this document type!']
    },
    StationTypeName: {
        type: String
    },
    ProjectName: {
        type: String
    },
    Description: {
        type: String
    }
}, {
    timestamps: true   
});

export default mongoose.model('projects', modelSchema);