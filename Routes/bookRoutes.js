const express=require("express")
const {addBookCtrl,getBookCtrl,deleteBook,editBooks,getIdBook} =require("../controller/bookController")
const router=express.Router()
router.post("/addbook",addBookCtrl)
router.get("/getAllBook",getBookCtrl)
// getbook acc to ids
router.get("/getBookAcToId/:id",getIdBook)
router.delete("/deleteBooklist/:id",deleteBook)
router.put("/editBooks/:id",editBooks)

module.exports=router