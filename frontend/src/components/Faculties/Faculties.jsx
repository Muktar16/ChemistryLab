import { Button, Card } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

const Faculties = () => {
    const [loading, setLoading] = useState(false);
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
            {arr.map((i)=>(
                <Card 
                    loading={loading} 
                    actions={[<Button type='link'>See Details...</Button>]} 
                    hoverable 
                    style={{width: 240,height:315,margin:15}}
                    cover={<img alt="example" 
                                src={`faculty${i}.jpg`} 
                                style={{
                                    height:'170px',
                                    width:'100%'
                                    }} />}>
                    <Meta title="Harunur Rashid" description="Assistant Profrssor" />
                </Card>
            ))}
            

        </div>
    )
}

export default Faculties;




