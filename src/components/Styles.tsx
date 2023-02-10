type HeadingProps = {
  styles: React.CSSProperties;
};

const StyleTypes = ({ styles }: HeadingProps) => {
  return (
    <div>
      <h2 style={styles}>this is an heading</h2>
      <ImgStyles
        url={
          "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60"
        }
        width={300}
        styles={{ borderRadius: "5px" }}
      />
    </div>
  );
};

export default StyleTypes;

type ImgProps = {
  url: string;
  width: number;
  styles: React.CSSProperties;
};

const ImgStyles = ({ url, width, styles }: ImgProps) => {
  return (
    <div>
      <img style={styles} width={width} src={url} alt="" />
    </div>
  );
};
