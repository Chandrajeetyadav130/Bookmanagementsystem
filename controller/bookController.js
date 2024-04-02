const Book = require("../model/bookModel")
// book add controller
exports.addBookCtrl = async (req, res, next) => {
    const { name, author, title } = await req.body
    const bookAvail = await Book.findOne({ name });
    if (bookAvail) {
        return res.status(400).json({ msg: "Book already exist" })
    }
    const BookRes = new Book({ name, author, title })
    await BookRes.save()
    res.status(201).json({ success: true, BookRes })
}
//book get controller
exports.getBookCtrl = async (req, res, next) => {
    const getBookLists = await Book.find()
    if (!getBookLists) {
        return res.status(400).json({ msg: "books not available in the database" })
    }
    res.status(200).json({
        success: true,
        getBookLists
    })
}
// get book ac to id
exports.getIdBook=async (req,res,next)=>{
   const data=await Book.findById(req.params.id)
   if(!data){
    return res.status(400).json({success:false,msg:"not available id"})
   }
   res.status(200).json({success:true,data})
}
//delete books from the database
exports.deleteBook = async (req, res, next) => {
    const bookAvail = await Book.findById(req.params.id)
    if (!bookAvail) {
        return res.status(400).json({ success: false, msg: "Book not avail to delete" })
    }
    await Book.deleteOne({ _id: req.params.id })
    res.status(200).json({ success: true, msg: "Book deleted succesful" })
}
//edit books
exports.editBooks=async (req,res,next)=>{
 let bookId= await Book.findById(req.params.id)
 if(!bookId){
    return res.status(400).json({success:false,msg:"Book not available to delete"})
 }
 bookId =await Book.findByIdAndUpdate({_id:req.params.id},req.body)
   res.status(200).json({success:true,bookId})
}