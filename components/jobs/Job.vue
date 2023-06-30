<template>
    <div class="lg:mx-20 p-4 text-md text-gray-700 mb-20 bg-white rounded-xl lg:py-5 " >
        <div class="flex lg:flex-no-wrap overflow-x-auto gap-3  lg:flex-auto justify-between ">
            <div class=" p-3 px-10  rounded-xl bg-slate-50 shadow-md ">
                <div class="flex flex-no-wrap rounded-xl text-gray-500 ">
                    <div class="pt-1 mr-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M228.77 50.34A13.8 13.8 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.07l67.73 72.31a2 2 0 0 1 .54 1.37V216a14 14 0 0 0 21.77 11.64l32-21.33a14 14 0 0 0 6.23-11.65v-55.49a2 2 0 0 1 .54-1.37l67.79-72.38a13.82 13.82 0 0 0 2.44-15.08Zm-11.26 6.94l-67.73 72.32a13.93 13.93 0 0 0-3.78 9.57v55.49a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-76.83a14 14 0 0 0-3.78-9.58L38.53 57.32A2 2 0 0 1 40 54h176a1.9 1.9 0 0 1 1.83 1.19a1.86 1.86 0 0 1-.32 2.09Z"/></svg>
                    </div>
                    <div class="text-lg " >
                        Filter
                    </div>
                </div>
            </div>

            <div class="bg-gray-300 p-3 px-8  rounded-xl text-lg">
                <select class="bg-gray-300 outline-0 " required>
                    <option value=" " class="text-center w-[100px]"> Date Posted</option>
                    <option value="open" class="text-center">Management</option>
                    
                </select>
            </div>
            <div class="bg-gray-300 p-3 px-10  rounded-xl text-lg">
                <select class="bg-gray-300 outline-0 " required>
                    <option value=" " class="text-center w-[100px]">Experience Level</option>
                    <option value="open" class="text-center">Management</option>
                    
                </select>
            </div>
            <!-- Company -->
            <div class="bg-gray-300 p-3 px-10  rounded-xl text-lg">
                <select class="bg-gray-300 outline-0 " required>
                    <option value=" " class="text-center w-[100px]">Company</option>
                    <option value="open" class="text-center">Management</option>
                    
                </select>
            </div> 
            <!-- location -->
            <div class="bg-gray-300 p-3 px-10  rounded-xl text-lg">
                <select class="bg-gray-300 outline-0 " required>
                    <option value=" " class="text-center w-[100px]">Location</option>
                    <option value="open" class="text-center">Management</option>
                    
                </select>
            </div>
            
            <!-- category -->
            <div class="bg-gray-300 p-3 px-10  rounded-xl text-lg">
                <select class="bg-gray-300 outline-0 " required>
                    <option value=" " class="text-center w-[100px]">Category</option>
                    <option value="open" class="text-center">Management</option>
                    
                </select>
            </div>
            <!-- education -->
            <div class="bg-gray-300 p-3 px-10  rounded-xl text-lg">
                <select class="bg-gray-300 outline-0 " required>
                    <option value=" " class="text-center w-[100px]">Education</option>
                    <option value="open" class="text-center">Management</option>
                    
                </select>
            </div>
            

        </div>
        <div class="my-8 mx-2">
            <h2 class=" text-2xl font-semibold text-gray-600 ">
                Search results for 'Software Engineer' in Kenya
            </h2>
            <p class="text-blue-600 font-semibold mt-1 "> 50 results</p>
        </div>
        <div class="flex flex-auto justify-between gap 4">
            <!-- Show searched job -->
            
            <!-- Jobs list -->
            <div class="w-1/4 bg-white mr-4 hide ">
                <div>
                    <!-- card 1 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2 hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md  flex flex-no-wrap">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>                  

                    </div>
                    <!-- card 2 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2 hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md  flex flex-no-wrap">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 3 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 4 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 5 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 6 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 7 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 8 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 9 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-2 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                    <!-- card 10 -->
                    <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap hover:border-1 hover:border-gray-200 pl-2 hover:rounded-xl hover:shadow-md">
                        <div>
                            <div class="icon lg:pl-0 mt-4">
                                <nuxt-img class="h-12 w-15 lg:h-12 lg:w-14  bg-gray-300 rounded-full "
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                    ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                            </div>
                        </div>

                        <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                            <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer  </h1>
                            <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                            <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                        </div>


                       

                    </div>
                </div>
            </div>
            <!-- job Detail -->
            <div class="lg:w-3/4 w-full bg-gray-100 rounded-xl p-10">
                <!-- title -->
                <div class="flex justify-between ">
                    <div>
                        <h2 class=" text-2xl font-semibold text-blue-600 ">
                            Advanced Software Engineer  <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> 
                        </h2>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.25 5.5a3.25 3.25 0 1 1 .833 2.173l-2.717 1.482l-3.04 1.737a3.254 3.254 0 0 1 .31 2.464l5.447 2.971a3.25 3.25 0 1 1-.719 1.316l-5.447-2.97a3.25 3.25 0 1 1-.652-4.902l3.37-1.926l2.729-1.489a3.254 3.254 0 0 1-.114-.856Zm3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5Zm-11 7a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5Zm9.25 7.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0Z" clip-rule="evenodd"/></svg>
                    </div>
                    
                </div>
                <!-- Post details -->
                <div class="mb-20">
                    <p> Posted By: Safaricom PlC</p>
                    <p>Deadline: 05 Nov 2023</p>
                    <p>Location Ke</p>
                </div>

                <!-- pverview -->
                <div class="mb-10">
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

                 <!-- pverview -->
                 <div class="mb-10">
                    <h2>Responsibilies and Roles</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         <span class="text-blue-600"> Read More</span>
                    </p>

                </div>

                <!-- <div class="mb-10">
                    <div class="flex flex-wrap lg:mx-[50px] bg-blue-200  rounded-lg  ">
                        <div class="m-10 ml-[600px]  hide  mt-[100px]         ">
                            <Icon icon="flat-color-icons:document" width="155" height="155" />
                        </div>
                        <div class="m-10 lg:p-10 p-1">
                            <h1 class=" font-bold lg:text-3xl text-2xl text-gray-600 mb-9 "> KaziQuest For Employers</h1>
                        <p class="text-gray-600">  Are you looking to post a job? We have end to end solutions that 
                           <br> can keep up with you and your standards.</p>
    
                        <div class="flex flex-no-wrap gap-5 mt-10">
    
                            <div class="border border-blue-500 p-2 px-4 rounded-lg text-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-200 hover:text-blue-700" >
                                Post A Job
                            </div>
                            <div class="border border-blue-600 p-2 px-4 text-lg text-blue-700    rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white">
                                Post A Job Form
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                
                <div class="w-full bg-blue-700 text-white text-xl rounded-xl">
                    Apply Now
                </div> -->

            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
    export default {
        
    }
</script>