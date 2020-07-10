import React from 'react';

function Banner(props){
    return (
        <div className="banner">
            <div className=" textbox Home">
            <h2> {props.headText} </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies quam blandit, porttitor neque sit amet, dictum orci. Cras malesuada, nunc non mattis elementum, lacus libero fermentum sem, ac condimentum tellus mi quis eros. Sed fermentum condimentum tellus, ac efficitur ligula sollicitudin at. Quisque sollicitudin urna et erat posuere pretium. Morbi pellentesque mattis malesuada. Quisque fermentum ullamcorper ultricies. Mauris porttitor consectetur tellus, sit amet aliquam libero sagittis in. Donec massa felis, rhoncus in justo ac, eleifend pretium justo. Maecenas sollicitudin at lectus sit amet auctor. Nullam placerat non velit sed malesuada.</p>
            </div>
        </div>
    )
}

export default Banner;