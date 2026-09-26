import express from "express"
import { addbook, borrowBook, getAllbooks, getAllBorrowedBooks, getAllMembers, registerMember, returnBook } from "../controllers/library.controller.js"

const router = express.Router()

router.post("/books" , addbook);
router.post("/members" , registerMember);
router.post("/borrow/:bookId" , borrowBook);
router.put("/return/:borrowId" , returnBook);
router.get("/books" , getAllbooks);
router.get("/borrowed" , getAllBorrowedBooks);
router.get("/members" , getAllMembers);


export default router;