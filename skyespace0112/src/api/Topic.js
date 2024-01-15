import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;  
    padding :10px;
    
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width:940px;
    height:460px;
    justify-content: space-between;
    margin-right:40px;

`;

const Title = styled.a`
    font-family: Spoqa Has Sans Neo, sans-serif;
    font-size: 3rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin-top:40px;
   
`;

const Description = styled.p`
    font-family: NotoSansKR, sans-serif;
    font-size: 2rem;

`;

const Thumbnail = styled.img`
    width: 400px;
    height: 400px;
    margin : 40px;
    object-fit:cover;
`;




function Topic() {


    const [news, setNews] = useState([]);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ab4bb659fcde4e99a6880a2c5fb75bcc",
                {params: {query: 'latest' },});
                const newsData = response.data.articles.slice(0, 10);
                setNews(newsData);
            } catch (error) {
                console.error("Error fetching data", error);
                setNews(null);
            }
        };
        fetchNews();
    }, []);
 

    return (
        <div>
            {news === null ? (
                <div>No news found</div>
            ) : (
                news.map((item) => (
                    <Container key={item.title}>
                        <Thumbnail src={item.urlToImage} alt={item.title} />
                        <Content>
                            <Title href={item.url} target="_blank">{item.title}</Title>
                            <Description>{item.description && item.description.length > 150 ? item.description.slice(0, 150) + '...' : item.description}</Description>
                        </Content>
                    </Container>
                ))
            )}
        </div>
    );
};

export default Topic;
