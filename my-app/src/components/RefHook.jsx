import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const inputRef = useRef();
    const divRef = useRef();
    const value = useRef(0);
    const [, setRefValue] = useState({})

    useEffect(() => {
        // console.log('inputRef :>> ', inputRef.current);
        console.log('value :>> ', value.current);  // useRef ile oluşturulan value compenentin yeniden render olmasına sebep vermez.
    })

    const onInputFocus = () => {
        inputRef.current.focus()
    }

    const onDivBorder = () => {
        divRef.current.style.border = "1px solid red"
    }

    const onIncreaseRef = () => {  //useRef ile oluşturulan obje içindeki değer sabit kalır. Lifecycle sürecinde değişmez.
        setRefValue({})  // value nun render olup olmadığını görmek için yazdık.
        value.current += 1;
    }


  return (
    <div ref={divRef}>
        <h1>UseRef Konu Anlatımı</h1>
        <h3>useRef, .current değeri içinde değiştirilebilen bir obje döndürür. Bu objenin en önemli özelliği, bileşenin yaşam süresi boyunca aynı obje olarak kalmasıdır. Normalde bileşeni oluşturan fonksiyon gövdesinde oluşturulan değerler, bileşen her yeniden render edildiğinde yeniden oluşturulup değişkene ataması yapılır. useRef ile oluşturulan obje bileşenin yaşam süresi boyunca değişmez ve hep başlangıçta oluşturulan objeye referans gösterir.</h3>
        <input ref={inputRef} placeholder="Search..."/>
        <button onClick={onInputFocus}>Input'a Focus Ol </button>
        <button onClick={onDivBorder}>Change Div Border </button>
        <button onClick={onIncreaseRef}>Increase Ref Value </button>
    </div>
  )
}

export default RefHook