import {useState} from 'react'

const Hero = () => {
    const [displayPic,setDisplayPic]=useState(null);
    const [name,setName]=useState(null);
    const [userName,setUserName]=useState(null);
    const [blueTick,setBlueTick]=useState(false);
    const [followers,setFollowers]=useState(null)
    const [postCount,setPostCount]=useState(null);
    const [mutuals,setMutuals]=useState(null);
    const [messages,setMessages]=useState([])
    const [myMessage,setMyMessage]=useState('');
    const [otherMessage,setOtherMessage]=useState('');

    function handleMyMessage(){
        if(myMessage.trim()!==""){
            setMessages(
                (prevMessages) => [{
                    msg:myMessage.trim(),
                    sender:"me"
                }, ...prevMessages])
        }
    }
    function handleOtherMessage(){
        if(otherMessage.trim()!==""){
            setMessages(
                (prevMessages) => [{
                    msg:otherMessage.trim(),
                    sender:"other"
                }, ...prevMessages])
        }
        
    }


    function handleFollowerChange(e){
        setFollowers(e.target.value)
    }

    function handleStatusChange(){
        setBlueTick(!blueTick)
    }
    function handleuserNameChange(e){
        setUserName(e.target.value)
    }

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handlePicChange(e){
        setDisplayPic(URL.createObjectURL(e.target.files[0]))
    }

    
  return (
    <div className='lg:grid lg:grid-cols-2'>
        <div className='p-4'>
            <div className='p-2'>
                <div>
                    Upload Profile Image
                </div>
                <div>
                    <input type="file" onChange={handlePicChange} className='border rounded bg-black'/>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    Enter Name
                </div>
                <div>
                    <input type="text" onChange={handleNameChange} className='border rounded'/>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    Enter userName
                </div>
                <div>
                    <input type="text" onChange={handleuserNameChange} className='border'/>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    <button className='border rounded bg-blue-600 px-2 py-1' onClick={handleStatusChange}>Need a Blue Tick??</button>
                </div>
                
            </div>
            <div className='p-2'>
                <div>
                    Enter number of followers
                </div>
                <div>
                    <input type="text" onChange={handleFollowerChange} className='border'/>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    Enter number of posts
                </div>
                <div>
                    <input type="text" onChange={(e)=>{setPostCount(e.target.value)}} className='border'/>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    Enter mutual followers name
                </div>
                <div>
                    <input type="text" onChange={(e)=>{setMutuals(e.target.value)}} className='border'/>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    Enter your message
                </div>
                <div>
                    <input type="text" onChange={(e)=>{setMyMessage(e.target.value)}} className='border'/>
                    <button type="submit" onClick={handleMyMessage} className='border bg-red-500 px-2 m-2 rounded'>Send</button>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    Enter Other's message
                </div>
                <div>
                    <input type="text" onChange={(e)=>{setOtherMessage(e.target.value)}} className='border'/>
                    <button type="submit" onClick={handleOtherMessage} className='border bg-green-500 px-2 m-2 rounded'>Send</button>
                </div>
            </div>
        </div>

        <div className=' rounded-xl bg-black w-100 px-2 flex flex-col h-[86vh] my-2 pb-2'>
            {/* Name */}
            <div className='flex justify-between'>
                <div className='flex my-2'>
                    <div className='content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <div className='pl-2'>
                        {displayPic&& <img src={displayPic} alt="Preview not avbl" className='w-10 h-10 shrink-0 grow-0 p-0.5 rounded-full'/> }
                    </div>
                    <div>
                        <div className='flex'>
                            {name&&<div className='font-bold mx-1'>{name}</div>}{blueTick&&<div className='content-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="royalblue" class="size-5">
  <path fill-rule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
</svg>
</div>}
                        </div>
                        <div>
                            {userName && <div className='font-semibold text-xs mx-1'>{userName}</div>}
                        </div>   
                    </div>    
                </div>
                <div className='flex gap-3 mr-3'>
                    <div className='content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div className='content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <div className='content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Profile Details */}
            <div className='content-center'>
                <div className='flex justify-center'>
                    {displayPic&& <img src={displayPic} alt="Preview not avbl" className='w-25 h-25 shrink-0 grow-0 p-0.5 rounded-full'/> }
                </div>
                <div className='flex justify-center'>
                    {name && <div className='font-bold mx-1'>{name}</div>}
                    {blueTick &&
                        <div className='content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="royalblue" class="size-5">
                                <path fill-rule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    }
                </div>
                <div className='flex justify-center'>
                    {userName&&<div className='font-semibold text-sm mx-1'>{userName}</div>}
                </div>
                <div className='flex justify-center text-gray-400 text-sm mx-1'>
                    {followers && <div className='pr-1'>{followers} followers</div>}<div className='content-center pt-1'><div className="w-1 h-1 bg-gray-400 rounded-full"></div></div>{postCount && <div className='text-gray-400 text-sm mx-1'>{postCount} posts</div>}
                </div>
                <div className='flex justify-center'>
                    <div className='text-gray-400 text-sm mx-1'>You've followed this instagram account since 1994</div>
                </div>
                <div className='flex justify-center'>
                    {mutuals && <div className='text-gray-400 text-sm mx-1'>You both follow {mutuals}</div>}
                </div>
                
            </div>
            {/* Messages */}
            
            <div className='flex-grow overflow-y-auto p-2 space-y-2 flex flex-col-reverse justify-start'>
                {messages.map((message,i)=>{
                    return(
                        <div key={i} className={`flex ${message.sender==='me'?'justify-end':'justify-start'} py-1`}>
                            <div className={`rounded-2xl px-2 py-1 max-w-[75%] shadow-md ${message.sender==='me'?'bg-blue-600 text-white':'bg-gray-800 text-white'}`}>
                                {message.msg}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Message bar */}
            <div className='flex justify-between bg-gray-900 rounded-full p-2 min-w-96 mt-auto'>
                <div className='flex'>
                    <div className='bg-rose-500 rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='p-1 pl-2'>
                        Message...
                    </div>
                </div>
                <div className='flex gap-2 p-1'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
                            <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>

            </div>

        </div>
        

    </div>
  )
}

export default Hero