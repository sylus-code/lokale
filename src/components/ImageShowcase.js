import React, {Component} from 'react';
import ImageShowcaseElement from "./ImageShowcaseElement";
class ImageShowcase extends Component{
    render() {

        const dev =["Sprzedaż mieszkań deweloperskich bez prowizji",
        "Za darmo, nie ponosząc żadnych kosztów, możesz wybrać sobie nowe mieszkanie deweloperskie"];
        const sec =["Srzedaż mieszkań na rynku wtórnym","Wynajem mieszkań i lokali użytkowych"];
        return (
            <section className="showcase" id='offer'>
                <div className="container-fluid p-0">
                    <ImageShowcaseElement pic="image-case-2" even="true" message={dev} heading="Mieszkania deweloperskie"/>
                    <ImageShowcaseElement pic="image-case-4" even="false" message={sec} heading="Mieszkania z rynku wtórnego"/>
                </div>
            </section>
        );
    }
}

export default ImageShowcase;