export default function Itinerary(){
    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-800">
                    <th className="border border-gray-300 p-2 text-left">Day/Route</th>
                    <th className="border border-gray-300 p-2 text-left">Distance/Time</th>
                    <th className="border border-gray-300 p-2 text-left">Map Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 p-2">DAY -2: Saigon Landing</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY -1: Saigon is awesome!</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 0: Hotel Checkout</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2"><a href="https://flamingotravel.com.vn/rentals/honda-cb-150x/#carousel-example-generic"   target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Bike Pick up</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 1: Saigon - Phan Thiet (make a quick stop at Vung Tau if possible for sightseeing)</td>
                    <td className="border border-gray-300 p-2">230 km – 5 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/2Ro5vexJRaacGzbY8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 2: Phan Thiet - Dalat</td>
                    <td className="border border-gray-300 p-2">174 km - 4 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/HJ3pdHiVDW1wXjRX7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 3: Dalat - Nha Trang</td>
                    <td className="border border-gray-300 p-2">135 km - 3 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/6t8NZ9zwvhNFQgXf9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 4: Nha Trang - Quy Nhon</td>
                    <td className="border border-gray-300 p-2">236 km - 5 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/UBeKFe8zcANqis758" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 5: Quy Nhon - Hoi An</td>
                    <td className="border border-gray-300 p-2">291 km - 5 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/shjVcRw3CMRC9dJ99" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 6: Hoi An - Hue (make a quick stop at Da Nang if possible for sightseeing)</td>
                    <td className="border border-gray-300 p-2">154 km - 4 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/cKdzVgiwB2KdQgL4A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 7: Hue - Phong Nha cave</td>
                    <td className="border border-gray-300 p-2">231 km - 5 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/agQoGMqnkLTtoJLRA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 8: Phong Nha cave - Pho Chau</td>
                    <td className="border border-gray-300 p-2">182 km - 4 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/phTGAR3ZAtGCRKbAA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 9: Pho Chau - Cuc Phuong National Park nearby hotel</td>
                    <td className="border border-gray-300 p-2">316 km - 6 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/bEXWDHb6hBWrfjLo7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 10: Cuc Phuong - Hanoi</td>
                    <td className="border border-gray-300 p-2">139 km - 3 hours</td>
                    <td className="border border-gray-300 p-2"><a href="https://maps.app.goo.gl/Y1eBL6uDnZAvkahk9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Route</a></td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">DAY 11: Hanoi - back to California</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                </tr>
            </tbody>
        </table>
    );
}