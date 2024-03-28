
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getBookId } from '../../utility/utility';


const PageToRead = () => {
    const [chatData, setChatData] = useState([])
    useEffect(() => {
        fetch('../books.json')
            .then(res => res.json())
            .then(data => {
                const storedBookId = getBookId()
                if (data.length > 0) {
                    const booksArray = [];
                    for (const id of storedBookId) {
                        const book = data.find(item => item.bookId === id)
                        if (book) {
                            booksArray.push(book)
                        }
                    }
                    setChatData(booksArray);
                }

            })

    }, [])
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='container mx-auto bg-[#EEEEEE] mt-10 rounded-xl md:p-10 h-[300px] md:h-[500px] w-[100%]'>
            <ResponsiveContainer>
                <BarChart
                    width={1200}
                    height={400}
                    data={chatData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chatData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>


        </div>
    );
};

export default PageToRead;