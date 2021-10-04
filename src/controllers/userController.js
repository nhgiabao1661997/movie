
const getListUser =async (req,res)=>{
    try{
    const usersList = await User.findAll();
    res.status(200).send(usersList);

}catch (error){
    res.status(500).send(error);
 
}};
    

// get by id
const getListUserByid =async(req,res)=>{
    try{
    const {id} =req.params;
    const userDetail = await User.findByPk(id);
    if(userDetail['id'] == id ){
        res.status(200).send(userDetail);

    }else{
        res.status(404).send(error);
    }


    
}catch(error){
    res.status(500).send(error);

}}
    
// Creat New User 
const  createNewuser =  async (req,res)=>{
    const {name ,email ,phone ,password ,age,role  } =req.body;
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({name ,email ,phone ,password :hashPassword ,age , role:'client'});
        //console.log(newUser['email'], "đã tạo thành công" )
        res.status(201).send(newUser);
    }catch(error){
        res.status(500).send(error)
    }
    
};

const deleteUser = async (req,res) => {
    const {id} =req.params;
    try{
        await User.destroy({
            where: {
                id,
            },
        });
        res.status(200).send("Xóa thành công");
    }
    catch(error){
        res.status(500).send(error);    
};}


const updateUser = async (req,res) => {
    const {id} =req.params;
    const {name, age ,phone} =req.body;
    try{
        await User.update({ name, age ,phone }, {
            where: {
                id,
            }
          });
          res.status(200).send("Update thanh cong")
    }catch(error){
        res.status(500).send(error);    

    }
    
}; // 2 đứa thấy rồi này :v 

module.exports={
    getListUser, 
    getListUserByid,
    createNewuser,
    deleteUser,
    updateUser}
