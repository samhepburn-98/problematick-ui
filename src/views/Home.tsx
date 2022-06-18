import { Box, Button, Stack } from "@mui/material";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Home = () => {
    return (
        <>
            <h1>Hello world</h1>
            <Stack direction="row" spacing={1}>
                {
                    numbers.map((number) =>
                        <Box>
                            <Button>
                                {number}
                            </Button>
                        </Box>
                    )
                }
            </Stack>
        </>
    );
};

export default Home;
