import ReactDOM from 'react-dom/client';
import Search from './components/Search'
import './index.css'
import img1 from './assets/images/vijay.jfif'
import img2 from './assets/images/aniruth.jfif'
import img3 from './assets/images/actor1.jpg'
import img4 from './assets/images/nayan.jfif'
import img5 from './assets/images/rasmika.jfif'
import img6 from './assets/images/siva.jfif'
import img7 from './assets/images/suriya.jfif'
import img8 from './assets/images/samantha.jfif'

import Chat from './components/Chat'



const root = ReactDOM.createRoot(document.getElementById('root'));

const people=[
    {
        id:1,
        name:"Vijay",
        desc:"He is a versatile Indian actor,producer and playback singer",
        time:"11:30",
        pic:img1

    },
    {
        id:2,
        name:"Aniruth Ravichander",
        desc:"Aniruth has since composed music for numerous blockbuster films",
        time:"7:10",
        pic:img2

    },
    
    {
        id:3,
        name:"Dhanush",
        desc:"He is special indian actor and singer",
        time:"1:40",
        pic:img3

    },
    {
        id:4,
        name:"Nayantara",
        desc:"She is a Lady Superstar of South Indian Films",
        time:"12:30",
        pic:img4

    },
    {
        id:5,
        name:"Rashmika Mandanna",
        desc:"She is a  rising indian actress and model",
        time:"5:05",
        pic:img5

    },
    {
        id:6,
        name:"Sivakarthikeyan",
        desc:"He is versatility in handling both comedic and dramatic roles",
        time:"4:15",
        pic:img6

    },
    {
        id:7,
        name:"Suriya",
        desc:"He is renowned indian actor and producer",
        time:"4:15",
        pic:img7

    },
    {
        id:8,
        name:"Samantha",
        desc:"She versatility in both commercial and critically praised roles ",
        time:"4:15",
        pic:img8

    }
]

root.render(
    <div>
    <Search />
    {
        people.map((item)=>
            {
            return <Chat name={item.name} desc={item.desc} time={item.time} pic={item.pic}></Chat>
            })
        

    }
    </div>
)


