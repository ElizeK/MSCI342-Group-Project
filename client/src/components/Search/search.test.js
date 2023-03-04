// test if search renders on page 
describe('Search', () => {

    test('renders component', () => {
        const { getByTestId } = render(<Search />);
        const SearchComponent = getByTestId('search');
        expect(SearchComponent).toBeInTheDocument();
    });

    it("checking title input", () => {
        const { getByTestId } = render(<Search />);
        //expect(screen.getByText('Title')).toBeInTheDocument(); doesnt work - function not recognized after download 
        const searchbox = getByTestId('searchbox');
        expect(searchbox).toBeInTheDocument();
    })

});

//Test fails