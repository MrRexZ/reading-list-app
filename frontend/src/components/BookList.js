import React, { Component } from "react";
import { Table } from "reactstrap";
import GridSystem from "./GridSystem";
// import NewStudentModal from "./NewStudentModal";

// import ConfirmRemovalModal from "./ConfirmRemovalModal";

const Item = props => {
    //destrcture the props
    const { title, author, genre,  cover_image_url, read } = props

    return (
      <div className="book">
        <img 
      src={cover_image_url}
      />
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>
        <p>{!read ? 'Unread' : 'Finished reading!'}</p>
      </div>
    )
  }

class BookList extends Component {
    render() {
        const books = this.props.books;
        return (
            <div>
            {/* colCount is the number of columns for our grid system.
                md is a bootstrap breakpoint (will discuss breakpoints in the article)
            */}
            <GridSystem colCount={2} md={6}>
              {/* Here we are mapping every element to an <Item /> and pass props.
                  map returns an array of JSX that the grid system will take as children.
              */}
              { books.length > 0 ? books.map(item => <Item key={item.id} id={item.id} title={item.title} author={item.author} cover_image_url={item.cover_image_url} genre={item.genre} read={item.read} />) : [<p>No books are found.</p>] }
            </GridSystem>
          </div>
        );
    }
//   render() {
//     const students = this.props.students;
//     return (
//       <Table dark>
//         <thead>
//           <tr>
//             <th>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {!students || students.length <= 0 ? (
//             <tr>
//               <td colSpan="6" align="center">
//                 <b>Ops, no one here yet</b>
//               </td>
//             </tr>
//           ) : (
//             students.map(student => (
//               <tr key={student.pk}>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.document}</td>
//                 <td>{student.phone}</td>
//                 <td>{student.registrationDate}</td>
//                 <td align="center">
//                   <NewStudentModal
//                     create={false}
//                     student={student}
//                     resetState={this.props.resetState}
//                   />
//                   &nbsp;&nbsp;
//                   <ConfirmRemovalModal
//                     pk={student.pk}
//                     resetState={this.props.resetState}
//                   />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//     );
//   }
}

export default BookList;