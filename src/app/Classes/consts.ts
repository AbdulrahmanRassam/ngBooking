
export const categories=[
  {
    name:'Root',
    arName:'Root AR', progCode:'homePagePro', url:'/', father:'',
    pointTo:'', level:1, is_main:true,
children:[]
  },
  {
    name:'Home Page',
    arName:'Home Page AR', progCode:'homePagePro', url:'/home', father:'RootPro',
    pointTo:'', level:1, is_main:true,
    children:[]
  },
  {
    name:'Booking Page',
    arName:'Home Page AR', progCode:'bookingPro', url:'/booking', father:'RootPro',
    pointTo:'', level:1, is_main:true,
    children:[]
  },
  {
    name:'Jobs Page',
    arName:'Jobs Page AR', progCode:'jobsPro', url:'/jobs', father:'RootPro',
    pointTo:'', level:1, is_main:true,
    children:[]
  },
  {
    name:'Show Room',
    arName:'Show Room  AR', progCode:'showRoomPro', url:'/home', father:'bookingPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  },
  {
    name:'Add Room',
    arName:'Add Room  AR', progCode:'addRoomPro', url:'/add-room', father:'bookingPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  }

]
