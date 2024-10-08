

// const Navbar = () => {
//   return (
//     <div className="w-full p-5 flex items-center justify-between">
//       <div className="flex items-center font-bold gap-2">
//         <span>Streamify</span>
//       </div>
//       <div className="flex items-center gap-5">
//         <img src="/search.svg" alt="Search" className="icon" />
//         <img src="/app.svg" alt="App" className="icon" />
//         <img src="/expand.svg" alt="Expand" className="icon" />
//         <div className="relative">
//           <img src="/notifications.svg" alt="Notifications" />
//           <span className="absolute bg-red-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs top-[-10px] right-[-10px]">
//             1
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <img
//             src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
//             alt="User"
//             className="w-6 h-6 rounded-full object-cover"
//           />
//           <span>Ishma</span>
//         </div>
//         <img src="/settings.svg" alt="Settings" className="icon" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;


const Navbar = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between flex-wrap">
      <div className="flex items-center font-bold gap-2">
        <span>Streamify</span>
      </div>
      <div className="flex items-center gap-5">
        <img src="/search.svg" alt="Search" className="icon" />
        <img src="/app.svg" alt="App" className="icon" />
        <img src="/expand.svg" alt="Expand" className="icon" />
        <div className="relative">
          <img src="/notifications.svg" alt="Notifications" />
          <span className="absolute bg-red-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs top-[-10px] right-[-10px]">
            1
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="User"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="hidden sm:inline">Ishma</span>
        </div>
        <img src="/settings.svg" alt="Settings" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;

