// import UserClass from './UserClass';
// import React from 'react';
// import { GITPROFILE_URL } from '../utils/constants';

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('Parent constructor called');

//     this.state = {
//       gitProfileInfo: null,
//     };
//   }

//   componentDidMount() {
//     console.log('Parent componentDidMount called');
//     const fetchUserInfo = async () => {
//       const data = await fetch(GITPROFILE_URL);
//       const json = await data.json();
//       this.setState({
//         gitProfileInfo: await json,
//       });
//     };
//     fetchUserInfo();
//   }

//   render() {
//     console.log('Parent render called');
//     if (this.state.gitProfileInfo == null) {
//       return <h2>Loading.....</h2>;
//     }

//     return (
//       <div className="border border-gray-400 shadow-lg w-10/12 mx-auto md:h-64 rounded-2xl my-44 flex md:flex-row flex-col hover:scale-105 transition-all">
//         {/* 
//                 <h1>My About Us Page - Class Based</h1>
//                 <hr />
//                 <UserClass name={"Class child1"}/>
//                 <UserClass name={"Class child2"}/>
//                 */}
//         <div className="md:w-2/12 w-full border-e border-amber-200">
//           <img
//             src={this.state.gitProfileInfo.avatar_url}
//             alt="profile pic"
//             className="rounded-full size-32 m-auto p-1"
//           />
//           <p className="font-semibold text-2xl text-center font-sans">
//             {this.state.gitProfileInfo.name}
//           </p>
//           <p className="italic font-light text-center">
//             <span className="font-normal">Software Developer</span> - Cicada
//             Green Cons.
//           </p>
//         </div>
//         <div className="profile-content md:w-10/12 w-full flex justify-center items-center text-gray-400 italic p-1.25">
//           {`“ ${this.state.gitProfileInfo.bio} ”`}
//         </div>
//       </div>
//     );
//   }
// }
// /*
// const About = () =>{
//     return(
//         <div>
//             <h1>My About Us Page</h1>
//             <User name={"Function Bharat Component"}/>
//             <hr />
//             <UserClass name={"Class Bharat Component"}/>
//         </div>
//     )
// }
// */
// export default About;





import React from "react";
import { GITPROFILE_URL } from "../utils/constants";
import { Code, Database, ChefHat } from "lucide-react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitProfileInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch(GITPROFILE_URL);
    const json = await data.json();
    this.setState({ gitProfileInfo: json });
  }

  render() {
    const { gitProfileInfo } = this.state;

    if (!gitProfileInfo) {
      return <h2 className="text-center mt-20 text-gray-500">Loading...</h2>;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-orange-400 to-blue-400 p-6">
        <div className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 w-10/12 md:w-8/12 text-center hover:scale-105 transition-all">
          {/* Profile Section */}
          <img
            src={gitProfileInfo.avatar_url}
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto border-4 border-white/40 shadow-lg"
          />
          <h2 className="text-3xl font-bold text-white mt-4">
            {gitProfileInfo.name}
          </h2>
          <p className="text-gray-100 italic">
            Software Developer – Cicada Green Cons.
          </p>

          {/* Bio */}
          <p className="mt-4 text-gray-200 italic">
            “{gitProfileInfo.bio}”
          </p>

          {/* Skills Section */}
          <div className="flex justify-center gap-8 mt-6 text-white">
            <div className="flex flex-col items-center">
              <Code className="w-6 h-6 mb-1" />
              <span className="text-sm">Web Dev</span>
            </div>
            <div className="flex flex-col items-center">
              <Database className="w-6 h-6 mb-1" />
              <span className="text-sm">Databases</span>
            </div>
            <div className="flex flex-col items-center">
              <ChefHat className="w-6 h-6 mb-1" />
              <span className="text-sm">Food Lover</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
