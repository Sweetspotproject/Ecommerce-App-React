import { styled } from "@mui/icons-material";

const Container = styled.div``;

const Categoryitem = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Categoryitem item={item} />
      ))}
    </Container>
  );
};

export default Categoryitem;
