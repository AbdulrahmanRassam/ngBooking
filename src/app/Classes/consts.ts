
export const categories=[
  {
    name:'Root',
    arName:'Root AR', progCode:'RootPro', url:'/', father:'',
    pointTo:'', level:1, is_main:true,
children:[]
  },

  {
    name:'Booking ',
    arName:'Home  AR', progCode:'bookingPro', url:'/booking', father:'RootPro',
    pointTo:'', level:1, is_main:true,
    children:[]
  },
  {
    name:'Jobs ',
    arName:'Jobs  AR', progCode:'jobsPro', url:'/jobs', father:'RootPro',
    pointTo:'', level:1, is_main:true,
    children:[]
  },
  {
    name:'Show Rooms',
    arName:'Show Room  AR', progCode:'showRoomPro', url:'/home', father:'bookingPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  },
  {
    name:'Add Room',
    arName:'Add Room  AR', progCode:'addRoomPro', url:'/add-room', father:'bookingPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  },
  {
    name:'Booking Requests',
    arName:'Booking Requests  AR', progCode:'BookingRequestsPro', url:'/booking-requests', father:'bookingPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  },
  {
    name:'Show Jobs',
    arName:'Show Job  AR', progCode:'showJobPro', url:'/jobs', father:'jobsPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  },
  {
    name:'Add Job',
    arName:'Add Job  AR', progCode:'addJobPro', url:'/add-job', father:'jobsPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  },
  {
    name:'Job Requests',
    arName:'Job Requests  AR', progCode:'jobRequestsPro', url:'/job-requests', father:'jobsPro',
    pointTo:'', level:1, is_main:false,
    children:[]
  }

]
