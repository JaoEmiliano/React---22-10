import React from 'react';
import './App.css';

const products = [
  {
    id: 1,
    title: "Coquinha gelada",
    price: "R$ 1.000 kwanzas",
    image: "https://pbs.twimg.com/media/EcgP9XxX0AAGsQ_.jpg"
  },
  {
    id: 2,
    title: "Pastel variado",
    price: "R$ 780 kwanzas",
    image: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3319443:1672692668/Massa%20de%20pastel.jpg?f=4x3&$p$f=e4d15c4"
  },
  {
    id: 3,
    title: "Coxinha variada",
    price: "R$ 750 kwanzas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJYnk19-jrGFPClIRsq16Ni2KtX-xgqkJkA&s"
  },
  {
    id: 4,
    title: "Arroz branco",
    price: "R$ 600 kwanzas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWauPxqcX38qSkRY0p4nrTQSauuGQ3E7vmQ&s"
  },
  {
    id: 5,
    title: "Ovo frito",
    price: "R$ 300 kwanzas",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJYAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMCAwUHAgUEAQUAAAABAgMABBESIQUxQQYTIlFhBxQycYGRoUJSI7HB0fAVM1NyJENiguHx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QAJhEAAgIBBAEDBQEAAAAAAAAAAAECEQMEEiExQRNRYRQiMkKRBf/aAAwDAQACEQMRAD8A5I9sV+FaZMRGcjFaaS3DA+HFMmxDbhcjzqnElMzRQ52pODnB3rRPYJqyF+lMTWMezKPpUNFWUoYg4G1PK69RvUxrLPJR96aNix5A/SpaKGSy5+D8URKH9OKe9zmG2nNK9wuOkZpARSF6HHzFAg6cAg/SpR4fdY/2jSPcLvP+0aKAj6Xo9xzBqT7hd/8ACaJrG6/4W+9FMLGGPpRa8CnDZ3Q5xPRGC4TnG4zRQCA9Fqyd/vStMgzqU/ahn0H1FKgEls0kkedOYB5KD9KScftpiYkAUoAUNv2ijHyoAMAU4NhSKMAHzpAOK21LWN5PgRm+QpCnzqy4TxP3GUEwpKnkdiPkaFEYLPgV7dso7vu0/c9CtMnarhqwZME3e/8AGF/rQq6QDwiidM4HyovdoidsD0BqWOHSAYXl509Fwt2bLuR6VocWckVL2QOenqOdNjhqseZP0rR+528OO9YZ8qcQase72+R+5hUOLZVoz6cGDgYhJPmalR8AGPEsaCrW8lhs4w3ELtYSfhjQeJvkOZqg4p2lW2Gi2tCTjZ5fEftyH1pOFdhZYJwa0A8TBj6CmphwazyJ3GR0rLXl/wARvYw9zdrDE3JdWPwKgXMVmmAtwZnHxZ5fSp4GauXtDwKDZIHkPoBUY9qbVtrXgzP6nl+BWca9AXRbW8ERO2VTf7mpNoeMcYkS3sY5rhh4dMCHb5nl96QGksLnivFWYcO4Rbkr0bpVyezHaLRrb/TVPIjQT+avvZ/2avuz9m1zxCdRPMctApzpHqeprT3LvJFJnDBhjw9aiUqTZcY7mkYGHspxDUouruykY80t7csfuTirFex0MmQLOaTI8Lct/PYYrXLxKC0iVIUVVUaSBuKct+PRgMmfCRsPKsX1O5/nR6K0u1Xts57dez6QjVG/c+ffKpUfXaqeXsNexuBK1iUP69x/euvjidqLfTJhxjLEjP0phntGUtIoKAHEXIN5V0WVr9rOcsCfcaOQXXYO7VQyWyyqeTxPt+cVAbsHxB3Ajs5sn0G1dUmccPZ5bNwYFfMlu7A+HzWrK3kikgjntt4plDqc9DXWGZS4M+bC8b+Dg992P4nZsRLazIempOdVknDLiL4kO3pXpdgdkY9MgEdKrr7gfD+IIfeLaNiT5aW+4rraOB5ya3kXmKLuX6iu08R9nltKXa0nCHPwSDOPrWT4n2NvrRyGtpCnR411KftVJJiMF3TUtYXNXkvDHjPiTIptbTfw7HyNPYFlUkRU+LehVq1sQd1FCnsCzokl7AnwHJ8gOtNp7zcsMAxK5xuOdTLPhUcRLMA5P7lz+asO5PwouTjZRzra4cXLo47vCKW3tLiaXTZWzTFMh3l/TVlHw+9jUmS4JHXuYMEfU1oeGkpb4hXG5yrNkmp9gFWdykRx+tgmM/SsfLe5M7WYM9jLe7Zprea6aZhlmm8RP151S3ns943eAraSwMcnCSgr+RXTbviMSXfdIElXmdLYK+mB0qTHfWvexwiRrbI8SjPipbH2LdaOKN7OOPgOZWtUKnGkyE5+uK1fA/ZLw+S2in4ldXUrOniiQiPB8x1Ira3XE7O3mWCCJriVzkADUcfzq3tke4w7DuHI2XVip8jMOnZHsDw2SQz2ErOhx/5UzsCflnFargE/BxbNHwSGCJBzSGMLUjiXZaz4oV/1OKO46awSrD6imez/AGUs+z083ujy6JNwJRkL9aTYFrdRRvEsjZ1ADGRgA0iCzW4gOpm5/EMc6fgSaMuzSJKrfo5ECn1GN42IGPKh7Whq0UM/BWi16cMDglicY+tZm/sLiB5JV/iZJUcuX0ro4kGnAUEHngUj3WKRtTiP6D+dY8mjhPo24tbkx/JyVWuInKyxzaSPLOPlQmmkRQ0U05bGCHBGK63JY27jHdIf/iKg3nB7F18VtHqAycLzrOv86vJpf+lf6nMYgXJa4bw48R6YrT8HsLtbeFI4g1uAWBycctvpUu34Qq6kliRo2JDB1zkHpWlsY1SFFjjARQMAbBR5YrThwbeDLqNR6hWRF10iRTnkBmn7hIHiDQrlxzxzqbdWqyLrjyGHLpVTCTpEjZBwQM1o6MYUokDBZDqxybGM0hAAxY7Z5gdamiMmMsASDzKio0sbRjUFdyegIpgUHFuzPD+ISNMQ8c7JjUh2HzHI1kOK9jr22Qyd2s8OM95F0+h3FdRSLvNICnB3wedN3MC+7sqAo37W5GrjJoRxJrEg4Rh6hqFdDvuy1hKJJY3a2kc5OhsjV546UK7KcRNDrKApI5D8VFtc3V/cwGYxaSF1Y5jSDuPmTUm506dIdxq2wVyfyM1I7PQJMDI6M2tvEc5+X4xXfUv7UjljXJccOsbe30jX4iPEzEcumKkXogERC6s48J05+x60+yCJAQ6qYxsTzIpizSW6YiaT+Gu4X18z/asrpHUgWvDu/nJbweH4gxB+1T24ZaQ/xGiE+AQXc5OOtWYhdU1KuDv5HNR5owjBiGBIzgczUNyHwJsrmzjJWKIRdNgBUia5ihtWmuJFWNNy2d8VEaKAD3iUYHkTj8Vn5bwcV4qsLKWtIfEVXYE8s1mzZvTXyaMGD1X8Iun4lfcRgeW0HutuvJmXLuPMdBSJLSz7vvrlmuBpGozSMf5fSo8V4yQmJvDFkhcnJA9cVFW+dE7tRhNRAbV0HqK5WnzPk2RxUvt4H7aCxW5a5ggURrkeFAyFfkf/AKqSsl1IY5I5khDHOgppAOw29OfOihvI4Uc92GEm7HqTUNOJQe5meez7plOrEqGTJzyGDnPLkOu1dIqC4RE4yfLVlrc3t9D3ZECOoO5LjBHT5UmHtHA7xxm37qZmxIjnHzIPI1EWCe7gW+gcFJfhRyRny2O4P9qVItg9p7rcxpJvgaPiVvQ9N6mTyLmL/olixyXK/hfQ3Ebyko+B5Go3Eby4gkA93Dr5jrVPwe+ksLscO4mTJ3gzby7bj9px1rTsiSQgaMqf3b11xz9SJky43jlRSRX8zED3Hn86npxBAmZCyHoNNFM3dJhWyvMBtx9/71HZe/VYTIA3LSfF9Mneuqi/DOdkhuLQqNm6b7VHt5GldsxqyMdgOv3pEXDraFlklbUSfCMZ/rTlxLdFcWoAVf0ttkelLa/LDscli7sd2JWjU/pU8qOJiVxKumNBgMTufmKzz3t8lwFeKVmGdQC5FS+EyyyTSe9p3YBwvjJBHTbocUux0WLFAivpyo2IGAR6imrgGfYugTTtk8xSZ7dpiZGk1Y3GBsKiTWspAxMNsYWnTBEaeyUzEwXOoctPShSDbXMaM6BpMk5wcYoU0Ioby7tYLVbnVKYwQquM6BqwMkg6ds1e9nZLS34VrjAIz4ARv5b1geB8V4jc8FkguHSctpeJ2PxkNkoTyztj5GtbwDiL3hcPpi71No1IwDnblWjNK2jnFUaGFROyyTSFtZwATVhYvpcwqXkYfE2nAFU1ncMVS2nGJF5s3LNT2M8jqDIVwfEvxbVnbdnQsrqePPdxsm4wSx/lSooNKKXddugG/wB6gyWyXEqygMGHMZ2z5kU+updpG386LfkOBPEY4WtyGkZc5053/FYmHhNxJczk3K2qLyZ+R5evTO/zFbS7dTDuNW3TaqHiFsl3ay2kupYye8jOeTevmDWPU4lNG3SZtnBRXUs9qur3yzuQB/6cni+1Qf8AVHaXWwPLBXVsf83+9MXNk8G5BZd8YG+ar3Z1JBQqflXkTllg+FR7kNkl7mgTjJ0lXXw46NvRWnGzaXLOsY7tgAxwNTHlnOfLaqT3rXFHC4UBW2YDcDr/AEpae56fFPcHnt3Yz/PFOGoyJ3YpY4NU0bGDiNtPcLdxu7uiFQsjZK5O+Px9qr77jMplPdhAceIpz1VT2zW8KN3Zm181JUAA9eRpL+P4q2yyyyQM0MUISvwTzJJKsdwJy7RuGXL8t/LFdD4Ne97w8F9WoEjnnGP/ANrndmgCFVXxFviB5jyxWo4HG4kWaQvGq5xpOzHfb7YNdNInB37mbXyjJJexccSvpYNSIjHGCSRjAPl5/wBKYi/3re4cnOc4IAzj/PxTV/NcT7GM6hnHiwMZwPuDnFCxRv8ATe7ZSJYtWnC5J32J9cVuX5HleB2G5dGjaaNj3rHkhGhd/vuKmNIHQqkihwBuMFsZ5/Kojxz91GZp1Ud2f4T4Pi6EN9x8jVXeCS2mj0tK5AIdRqOnOCRscYAGauxUX7T6pO6RlVgA2QNm33B/zrQ7mC4YsFUhPCedUPAZYvHDFdMZVOZEDhyAScHNXk12LWFp1SSVtv4SLkvtyxyzQmBJFomlVwdPqah3ChWbu8qFGDvgn1FTLWYXNqkypIhYatDjBX0PrVXxK8MR0MrN/wC/bw+lO0gSsOB5WkKkHJPM0Kz8vaAbaHjB6k5O1Co9SI6ON+8iySQQsY5SMA9wrEjy1HGB9Djpitb2Itb2S2HEILyNYgd4XXDE5xqG/p9waxR7RROTHxC2UnlkVpex/aHhXDbgMsg0jJWKQ5Xfnn/Nq7N7iDqlzKJIIpSD3mBkry5f3q44TdLKpZ0LMOfrWdj4xwvidl3VrcRxlhsBgetWvAb2Nf4E2kayCcefUVLQy/jliRjhcgjPLlSJJYzzANJZQ3XxMd6YmjA2B3odgIuSroQp0k7YBqouriQnD7hRjGOVWPdtnxqD8xSZbNpdwNJ9K4Tg2WnRQSwRXAwTg1Am4Uc5AU1fS8LkU8jUc2sqHGDms8sb8o0Qzyj0zPNwZ23CjNLj4JrVNZSNV9MlvpWjhSUEZVmGd1xjPpmnUsRKf4rhTn9Q3+9R6S8I6/VTM4vDo4x8LlR54FJl4ek6eBSpByrjmprWJwaQuNJ8P4qyteFJApBIAY53HWui07ZylqGZTgfB7juyXPeMGIDAadq1trYxxpvGe+0EHSeh549eVSxBDEFGog0qQLjrjnsa0QxqCOE5ub5KqVo7CRIGMr6xlFCYTboSOXKoV3dpmO4hmlkjcEiSDDKwx5elXerXrHd+EbDXzJ8/lRwKyMTpjA/SAOVUySuinmZY43iSO36NrOrltkHlvmo9xbuLl+8CkSIzLIr6tLbY+/8ASr7QHPJSw5GqyaZbeR1bDP108h/en12IRYd7LA0lxbiC4EQEjhs+L06ZHPNWFtgQQhyGkK7lRsSOdVti00TsFUsrNq1ZyPz09KfupZNeNQUYxlR0+VNNMCcD4cyN6DTsKz3aqynubOYWMhWQjKj18qsbe4xboJ5e8cDBbGMn5dKRNeMAQFXcYwaHQHnfjnGb57k2za4hB4Cvw5I2OR55BoV07td2YtOMxvcoiR3ib94B/uejY/nQpraHJwOZ2dyzbk0gH6VIkQdBUdhg0JgSYLy4hOYpnX5Grux7Y8Zs8YuC/wD2rNinEpiOn8J9r9/ahVu4A48xWy4Z7XeA3BHvqtA3mV2rgGmkkYp7go9T2nbfs3e47q5VyfJhV7b8Q4dcxBorlN+havHiSOhyjsp8wanW/G+KWuO4vp0x5NQB647yBxu2B58/5UnuIm/2yregO9eZLT2hdobfH/mGQD9wq9sva3xWLHvEaOPQ0mB3s2gPwnT5gEUZtgCBjkOZFcisvbKjY96t5R/13rR2Htb4FNtLLKh8igpbQN8kYU7mnS5UExjUazFr7QuztyRpvF+ROKs4O1PBJgBHdx48tQooCyDl1AYFcdKbbdvCN8bGmoOL8Nlzi5RhnbepaXFiy5WVPvSSHZEjeaMaZ1MhJxqA5D1qVnAHrRu9s+3eCmTIqDxSKaKoB1GCZ+e1Ud/MjXDZJjycYHJj0zUq54hGmdGT6mqmS5keXWuhwDnSwzUTlfA0Tbe0ukcBTIqYzqI2+9SpI9Kjx5cb56moNxxWb3UK7YHIhRUNr2TTq0Mx2xpGapUuhE4QR51EbY5KaW0S6R4Gx/nWnLEKq95MoG+V1H+lRrm9GpmYqBnYA86rgBv3UHLA4HrQqJNxWBVIOR9aOubcUM8+cU4d3ZM0G6noKqXjDD1rUGTuW0SkfWqq/swrGaD4eoFMdFGQQcGjU4NSZE1D1qKylatOyWiShzRlKYifB3qSpBFIQ2UpBU0+RQIosdEbFFT5WkFadgN5o8mjK0WKYgwxHIkU6tzMnwSMPrTNGBQBNi4tfxfBdSr8mNTIu1HF4xhb2bH/AHNVGkmi0nypDNJF2545HyvHPzNPr7QeM/qmLfOsppPlSSpoEbEe0Hif6iPvTkftDv0OdAz86xOKKikM3w9pd8CD3Yz86cX2n8QXGlBsMc657Rb+dFCOgy+07iUgwV+pY1Bn7f8AEZRjOPrWNBowDQ0Be3Paa8nJLyyb+TUKojyoUtqGaPjcM8rKyL4B1B3FV5uJbXCsdanzrR5BG9MyW8EnxRg/SpLKdrf3iITxDGrfFQZoee1afQEUKowByFVnFYyiLIqalydWB+am+QooXQinIM8yaeJRumDSMEcquxJDmoGhTfi8qMB/SkOhRoiaAB60MUyQsCklaURRUwE6aUooqGaAofSPIp1YAfSoqyEU6twy86hpjH2t8cqjyQ4p4XhxSHnD8xSVgQ3XFIIqS2G6YpOiuiYqI+KGKkCMZo+6Xzp2FEYClgVIEa+dGFXypWKiKRQqYFXyo6LCjRK1LzQoVLLCJpqTcYoUKkZXXFsoyy4FRCozQoUADSKLTQoUCE6RRaaFCqALFFgUKFBIWBQ0iioUxg00NNChQANPrR4oqFIA8UMUKFOwD00eKOhSAPTR4FHQoAFChQpgf//Z"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;