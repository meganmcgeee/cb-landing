import Slider from 'react-slick'
import {Component} from 'react'
export default class ProjSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const gallery = this.props.data.prismicProjects.data.gallery.map(
            (image, index) => (
              <div key={`project_gallery_images_${index}`}>
                <StyledImage>
                  <img src={image.image.url} />
                </StyledImage>
              </div>
        ));
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>
        );
    }
}

export const query = graphql`
  query ProjectGallery($uid: String!) {
    prismicProjects(uid: { eq: $uid }) {
      data {
        gallery {
          image {
            alt
            url
          }
        }
      }
    }
  }
`;