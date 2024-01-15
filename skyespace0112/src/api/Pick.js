import React, { useEffect } from 'react';



const Pick = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=e7674d925798b25fa317eea57b0ffa82&autoload=false';
        document.head.appendChild(script);

     script.onload = () => {
            window.kakao.maps.load(() => {
                const positions = [
                    
                     {
                        content: '<div>육회자매집 3호점</div>', 
                        latlng: new window.kakao.maps.LatLng(37.570671692748455, 127.00084667382912)
                    },
                     {
                        content: '<div>초선과 여포</div>', 
                        latlng: new window.kakao.maps.LatLng(37.49387117445589, 127.02842005569342)
                    },
                     {
                        content: '<div>바 준무</div>', 
                        latlng: new window.kakao.maps.LatLng(37.512982295433396, 126.89434697110049)
                    },
                      {
                        content: '<div>온혜화</div>', 
                        latlng: new window.kakao.maps.LatLng(37.58068896144171, 127.00362077390834)
                    },
                       {
                        content: '<div>호랑이 카페</div>', 
                        latlng: new window.kakao.maps.LatLng(37.567178510896056, 126.99542057107536)
                    },
                        {
                        content: '<div>일번지 육개장</div>', 
                        latlng: new window.kakao.maps.LatLng(37.50687363065749, 127.00548107111806)
                    },
                        {
                        content: '<div>박가네 빈대떡 2호점</div>', 
                        latlng: new window.kakao.maps.LatLng(37.570620466771196, 127.00130144222297)
                    },
                        {
                        content: '<div>2층버스스탑</div>', 
                        latlng: new window.kakao.maps.LatLng(37.531174647782166, 126.9683907999378)
                    },



                ];

                const container = document.getElementById('map');
                const options = {
                center: new window.kakao.maps.LatLng(37.571149551598424, 127.00086602472054),
                level :2
                };

                const map = new window.kakao.maps.Map(container, options);

                positions.forEach((position,index) => {
                const marker = new window.kakao.maps.Marker({
                        map: map, position: position.latlng
                    });

                const contentText = position.content.replace(/<[^>]*>?/gm, '');

       const infowindow = new window.kakao.maps.CustomOverlay({
        position: position.latlng,
        content: `<div style="width:auto; max-width:300px;text-align:center;padding:6px 0;background-color:white;font-weight:bold;font-size:20px;">${contentText}</div>`,
        yAnchor: 2.5
    });

    window.kakao.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.setMap(map);
    });

    window.kakao.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.setMap(null);
    });

    window.kakao.maps.event.addListener(marker, 'click', function() {
        window.open(`https://map.kakao.com/link/search/${contentText}`, '_blank');
    });
                    
    if (index === 0) {
        window.kakao.maps.event.trigger(marker, 'mouseover');
    }

});
                
            });
        };
    }, []);

    return(
    <div style={{
        display: 'flex',
        flexDirection :'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative' 
    }}>
            <h2 style={{
            fontFamily: 'NeoDunggeunmo',
            fontSize:'3rem', 
            fontWeight: 'bold',
        }}>
            가는 곳만 가는 스카이의 맛집 지도
        </h2>
            <div id='map' style={{
            width: '1300px',
                height: '900px',
                marginTop : '80px'
        }}></div>
    </div>
    );
};

export default Pick;
