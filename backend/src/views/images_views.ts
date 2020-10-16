import image from "../models/Images";

export default {
  render(images: images) {
    return {
      id: images.id,
      url: 'http://localhost:3333/uploads/' + images.path

    };
  },
  ManyRender(image: image[]){
      return image.map(image => this.render(image));
  }
};
