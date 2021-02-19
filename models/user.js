const moongoose = require('mongoose');
const userSchema = moongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true //트림은 공백(space).를 없애주는 역할
        ,unique: 1 //특별하게
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number // 1이면 관리자 .2 면 유져 등 구분
        ,default: 0 //지정안하면 0으로 설정    
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    },
})
const User=mongoose.model('User',userSchema)

//이 모델을 다른파일에서 쓸 수 있게 내보내기
module.exports={User}