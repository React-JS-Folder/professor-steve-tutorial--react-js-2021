// import './link.css'

// export default function Link(props) {
//    return  (
//       <a className="navLink" href={props.lnk.url}>
//          {props.lnk.title}
//       </a>
//    );

// }


// testing props object destructuring ------
import './link.css'

export default function Link(props) {
   // const {title, url} = props;
   return  (
      <a className="navLink" href={props.lnk.url}>
         {props.lnk.title}
      </a>
   );

}