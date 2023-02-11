import { Button, Card } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

const UnderGraduates = () => {
    const [loading, setLoading] = useState(false);
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center', alignItems:'center'}}>
            {arr.map((i)=>(
                <Card 
                    loading={loading} 
                    //actions={[<Button type='link'>See Details...</Button>]} 
                    hoverable 
                    style={{width: 240,height:315,margin:15}}
                    cover={<img alt="example" 
                                src={`./assets/undergrad${i}.jpg`} 
                                style={{
                                    height:'190px',
                                    width:'100%'
                                    }} />}>
                    <Meta title="Ahsan Ahmed Ridoy" description="Assistant Profrssor" />
                </Card>
            ))}
        </div>
    )
}

export default UnderGraduates;