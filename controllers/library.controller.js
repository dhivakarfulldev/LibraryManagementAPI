let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    totalCopies: 5,
    availableCopies: 5,
  },
];
let members = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    phone: "9876543210",
  },
];
let borrowRecords = [
  {
    id: 1,
    bookId: 1,
    memberId: 1,
    borrowDate: "2026-07-05",
    returnDate: "2026-07-12",
    status: "borrowed",
  },
];

export const addbook = (req, res) => {
  try {
    const { title, author, category, totalCopies } = req.body;
    if (!title || !author || !category || totalCopies === undefined) {
      return res.status(400).json({
        success: false,
        message: "missing required fields",
      });
    }
    const book = {
      id: books.length + 1,
      title,
      author,
      category,
      totalCopies: Number(totalCopies),
      availableCopies: Number(totalCopies),
    };
    books.push(book);
    res.status(201).json({
      success: true,
      message: "Book  added Successfully",
      book: book,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerMember = (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing fields required",
      });
    }
    const newMember = {
      id: members.length + 1,
      name,
      email,
      phone,
    };

    members.push(newMember);

    res.status(201).json({
      success: true,
      message: "Member Registered Successfully",
      member: newMember,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const borrowBook = (req, res) => {
  try {
    const id = Number(req.params.bookId);

    const { memberId, borrowDate, returnDate } = req.body;

    if (!memberId || !borrowDate || !returnDate) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const book = books.find((book) => book.id === id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    const member = members.find((member) => member.id === memberId);
    if (!member) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found" });
    }

    if (book.availableCopies <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "No borrowing Copies" });
    }
    book.availableCopies = book.availableCopies - 1;

    const borrowRecord = {
      id: borrowRecords.length + 1,
      bookId: book.id,
      memberId: Number(memberId),
      borrowDate,
      returnDate,
      status: "Borrowed",
    };

    borrowRecords.push(borrowRecord);

    res.status(201).json({
      success: true,
      message: "Borrow record created successfully",
      record: borrowRecord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const returnBook = (req, res) => {
  try {
    const id = Number(req.params.borrowId);
    const borrowrecord = borrowRecords.find((record) => record.id === id);
    if (!borrowrecord) {
      return res
        .status(404)
        .json({ success: false, message: "Borrow record not found" });
    }
    if (borrowrecord.status === "returned") {
      return res
        .status(400)
        .json({ success: false, message: "Book already returned" });
    }

    const book = books.find((book) => book.id === borrowrecord.bookId);
    if (book) {
      book.availableCopies += 1;
    }

    borrowrecord.status = "returned";

    res.status(200).json({
      success: true,
      message: "Book Successfully returned",
      return: borrowrecord,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getAllbooks = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Books",
    books: books,
  });
};

export const getAllBorrowedBooks = (req, res) => {
  try {
    const records = borrowRecords.map((record) => {
        const book = books.find((book) => (book.id === record.bookId));
        const member = members.find((member) => (member.id === record.memberId));

        return {
            BorrowId:record.id,
            BookTitle:book ? book.title : "Unknown title",
            MemberName:member ? member.name : "Unknown name",
            BorrowDate:record.borrowDate,
            ReturnDate:record.returnDate,
            ReturnStatus:record.status
        }
    })

    res.status(200).json({
        success:true,
        message:"Borrowed Records",
        records:records
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getAllMembers = (req , res) => {
     res.status(200).json({
        success:true,
        members:members
     })
}
