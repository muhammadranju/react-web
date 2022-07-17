import React from "react";
class App extends React.Component {


    render() {

        const image = 'https://picsum.photos/250/400?random=1'
        const image2 = 'https://picsum.photos/250/400?random=2'
        const image3 = 'https://picsum.photos/250/400?random=3'
        const image4 = 'https://picsum.photos/250/400?random=4'
        const image5 = 'https://picsum.photos/250/400?random=5'
        const image6 = 'https://picsum.photos/250/400?random=6'
        return (
            <>

                <div className="heading">
                    <h1>Top 6 Netflix pick</h1>
                    <p >Here are the 6 list of Netflix series</p>
                </div>

                <div className="text-center mt-2 mb-5">
                    <img src={image} className="img-fluid rounded shadow  m-1 " alt="..." />
                    <img src={image2} className="img-fluid  rounded shadow  m-1" alt="..." />
                    <img src={image3} className="img-fluid  rounded shadow  m-1" alt="..." />
                    <img src={image4} className="img-fluid  rounded shadow  m-1" alt="..." />
                    <img src={image5} className="img-fluid  rounded shadow  m-1" alt="..." />
                    <img src={image6} className="img-fluid  rounded shadow  m-1" alt="..." />
                </div>

            </>
        );
    }
}

export default App;
