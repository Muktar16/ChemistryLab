import { Carousel } from "antd"

const contentStyle = {
    height: '80vh',
    width:'60%'
};

export default function Home(){
    return(<>
       <Carousel autoplay>
            <div>
                <img style={contentStyle} src="/1.jpg" alt="" />
            </div>
            <div>
            <img style={contentStyle} src="/2.jpg" alt="" />
              
            </div>
            <div>
            <img style={contentStyle} src="/3.jpg" alt="" />
                
            </div>
            <div>
            <img style={contentStyle} src="/4.jpg" alt="" />
               
            </div>
        </Carousel>
    </>)
}