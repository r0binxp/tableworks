import React , {useState} from 'react';

// Components
import CircularProgressWithLabel from '../CircularProgressWithLabel/CircularProgressWithLabel'

// Colors
import purple from '@material-ui/core/colors/purple';



const VisualizationData = () => {
    const randomizeNumber = () => {
              
        setInterval(() => {
              setCpu(Math.floor(Math.random() * 100))
        }, 1000)
        setInterval(() => {
            setMem(Math.floor(Math.random() * 100))
      }, 6000)
        setInterval(() => {
             setDisk(Math.floor(Math.random() * 100))
     }, 10000)
    }
    const [cpu, setCpu] = useState(randomizeNumber)
    const [mem, setMem] = useState(randomizeNumber)
    const [disk, setDisk] = useState(randomizeNumber)
    
    React.useEffect(() => {
        setCpu(20)
        setMem(100)
        setDisk(80)

    },[])

    return (
        <div className="row p-3">
            <div className="col-12 col-xl-4 text-center mt-4 mt-xl-0">
                <CircularProgressWithLabel text="CPU" thickness={10} value={cpu} />
            </div>
            <div className="col-12 col-xl-4 text-center mt-4 mt-xl-0">
                <CircularProgressWithLabel text="MEM" color="secondary" thickness={10} value={mem} />
            </div>
            <div className="col-12 col-xl-4 text-center mt-4 mt-xl-0">
            <CircularProgressWithLabel text="MEM" style={{color: purple[500]}} thickness={10} value={disk} />
            </div>
        </div>
    );
};

export default VisualizationData;