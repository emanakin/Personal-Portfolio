import React from "react";

import { NextSeo } from 'next-seo';

export default function home({ props }) {
	return(
		<div>
            <NextSeo
                title="Exmaple Title"
                description="Description here ..."
            />
            <h1>Hello World</h1>
            {/* Components ... */}
		</div>
	)
}

// export async function getServerSideProps() {
// 	const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/content-type`;

//     const res = await fetch(url);
//     const data = await res.json();

//     return {
//         props: {
//             landingPageData: data,
//         },
//     };	
// }
