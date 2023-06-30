<template>
    <section class="bg-gray-100">
        <!-- Landing Page -->
        <div  class="w-full  flex flex-no-wrap lg:gap-5 gap-2 lg:pt-[15vh] lg:pb-[10vh] bg-blue-600 h-full lg: lg:p-8 pt-[15vh] pb-[15vh] text-white overflow-hidden">
            <div class="1 lg:w-20 text-white lg:mt-[300px] lg:mb-[300px] mt-[150px]">
                <Icon icon="ic:sharp-arrow-back-ios" />
            </div>

            <div class="2 w-[1000px] lg:pt-[100px] lg:p-[50px]">
                <h1 class="lg:text-5xl lg:mb-8 font-bold font-sans text-3xl pb-4 animate-bounce  ">
                    Find your next job, fast
                </h1>
                <p class="lg:pr-8 lg:text-lg text-sm font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <!-- Search Button -->
                <div
                    class="flex flex-wrap lg:w-[600px] sm:w-[500px] bg-white lg:mt-[50px] lg:h-[70px] h-[70px] rounded-xl w-full mt-[30px]">
                    <div class="skills text-gray-400 text-left">
                        <select class="lg:pt-0 h-full lg:w-[140px] w-[80px] bg-white rounded-2xl focus:outline-0" required>
                            <option value="" class="text-center">Skills</option>
                            <option value="open" class="text-center">Management</option>
                            <option value="hold" class="text-center">Software and IT</option>
                            <option value="closed" class="text-center">
                                Accounting and Finance
                            </option>
                            <option value="cancelled" class="text-center">Cancelled</option>
                            <option value="future-opportunity" class="text-center">
                                Future opportunity
                            </option>
                        </select>
                    </div>

                    <div class="jobs pl-2 lg:m-2 m-2" style="border-left: 1px solid gray">
                        <div class="icon">
                            <!-- <Icon icon="carbon:search" width="20" height="20" /> -->
                            <input class="h-full p-4 text-gray-800 lg:w-[360px] w-[180px] sm:w-[300px] focus:outline-0" type="text"
                                placeholder="Search Jobs" />
                        </div>
                    </div>
                    <div class="search text-white">
                        <div
                            class="search-job rounded-xl hover:bg-blue-900 bg-blue-600 lg:mt-4 lg:px-3 lg:py-2 lg:m-2 p-2 mt-3">
                            <Icon icon="carbon:search" width="25" height="25" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="3 lg:w-[800px]" style="
                background-image: url('https://www.kaziquest.com/assets/hire.svg');
            "></div>
            <div class="4 w-20 text-white lg:mt-[300px] lg:mb-[300px] mt-[150px]">
                <Icon icon="ic:outline-arrow-forward-ios" />
            </div>
        </div>

        <!-- Featured Jobs -->
        <div class="flex justify-between items-center p-2  border-gray-300 w-full lg:px-[50px] lg:py-5 ">
            <div>
                <div class="flex justify-center items-center gap-3 font-bold text-2xl text-gray-900">Featured Jobs</div>
            </div>

            <div class="flex items-center gap-3 hover:bg-blue-200  p-2 rounded-2xl">
                <!-- <Icon icon="carbon:search" width="20" height="20" />
              <Icon icon="carbon:search" width="20" height="20" /> -->
                <div class="flex justify-end items-end gap-4">
                    <div class="m- pl-2 w-full h-[60%] text-blue-700  ">
                        <NuxtLink to="/">View All Jobs
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex justify-end items-end gap-4">
                    <div class=" w-full h-[60%] text-blue-700 hover:text-white">                        
                            <Icon icon="ic:outline-arrow-forward-ios"  width="15" height="15" />                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Featured jobs -->
       <div class="mb-10 flex flex-no-wrap overflow-x-auto scrollbar-hide lg:gap-5 lg:px-[50px]">
       
        <div class="card h-[360px]  ml-[20px] lg:w-[420px] rounded-b-2xl my-2 bg-white shadow pb-2">
            <div class="h-40  w-60 lg:w-full   rounded-t-2xl" style="background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
            </div>

            <div class="pl-5 pr-5 pt-2 mb-4">
                <h2 class="text-lg font-semibold- ">Senior Cloud Engineer</h2>
                <p class="pb-3 text-gray-600">Kisumu, Kenya . 4h ago</p>
                <div class="flex gap-2 mb-3 flex-no-wrap">
                    <div class="icon">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  bg-gray-300 rounded-full "
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                    </div>
                    <div class="company py-2 text-gray-500">
                        Safaricom Plc
                    </div>
                </div>
                <NuxtLink to="/jobs/doctor">
                <div class="apply p-2 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                    Apply Now
                </div>
             </NuxtLink>
            </div>
            
        </div>

        <div class="card h-[360px]  ml-[20px] lg:w-[420px] rounded-b-2xl my-2 bg-white shadow pb-2">
            <div class="h-40  w-60 lg:w-full   rounded-t-2xl" style="
            background-image: url('https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
            </div>

            <div class="pl-5 pr-5 pt-2 mb-4">
                <h2 class="text-lg font-semibold- ">HR Payroll Specialist</h2>
                <p class="pb-3 text-gray-600">Nairobi, Kenya . 4h ago</p>
                <div class="flex gap-2 mb-3 flex-no-wrap">
                    <div class="icon">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  bg-gray-300 rounded-full "
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                    </div>
                    <div class="company py-2 text-gray-500">
                        Safaricom Plc
                    </div>
                </div>
                <div class="apply p-2 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                    Apply Now
                </div>
            </div>
            
        </div>
        <div class="card h-[360px]  ml-[20px] lg:w-[420px] rounded-b-2xl my-2 bg-white shadow pb-2">
            <div class="h-40  w-60 lg:w-full   rounded-t-2xl" style="background-image: url('https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
            </div>

            <div class="pl-5 pr-5 pt-2 mb-4">
                <h2 class="text-lg font-semibold- ">Office Administrator</h2>
                <p class="pb-3 text-gray-600">Kisumu, Kenya . 4h ago</p>
                <div class="flex gap-2 mb-3 flex-no-wrap">
                    <div class="icon">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  bg-gray-300 rounded-full "
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                    </div>
                    <div class="company py-2 text-gray-500">
                        Safaricom Plc
                    </div>
                </div>
                <div class="apply p-2 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                    Apply Now
                </div>
            </div>
            
        </div>
        <div class="card h-[360px]  ml-[20px] lg:w-[420px] rounded-b-2xl my-2 bg-white shadow pb-2">
            <div class="h-40  w-60 lg:w-full   rounded-t-2xl" style="background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
            </div>

            <div class="pl-5 pr-5 pt-2 mb-4">
                <h2 class="text-lg font-semibold- ">Senior Cloud Engineer</h2>
                <p class="pb-3 text-gray-600">Kisumu, Kenya . 4h ago</p>
                <div class="flex gap-2 mb-3 flex-no-wrap">
                    <div class="icon">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  bg-gray-300 rounded-full "
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                    </div>
                    <div class="company py-2 text-gray-500">
                        Safaricom Plc
                    </div>
                </div>
                <div class="apply p-2 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                    Apply Now
                </div>
            </div>
            
        </div>
       
        



        
       </div>

       <!-- Top Hiring Companies -->
       

        <div class="landing-companies">
            <div class="flex justify-between items-center p-2  border-gray-300 w-full lg:px-[50px] lg:py-5 ">
                <div>
                    <div class="flex justify-center items-center gap-3 font-bold text-2xl text-gray-900">Top Hiring Companies</div>
                </div>

                <div class="flex items-center gap-3 hover:bg-blue-200  p-2 rounded-2xl">
                    <!-- <Icon icon="carbon:search" width="20" height="20" />
                <Icon icon="carbon:search" width="20" height="20" /> -->
                    <div class="flex justify-end items-end ">
                        <div class="m- pl-2 w-full h-[60%] text-blue-700  ">
                            <NuxtLink to="/">  <span class="hide">View</span>   All Companies 
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex justify-end items-end ">
                        <div class=" w-full h-[60%] text-blue-700 hover:text-white">                        
                                <Icon icon="ic:outline-arrow-forward-ios" :class="`w-full h-[60%] text-blue-700 hover:text-white`"  width="15" height="15" />                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Scroll to see companies -->
            <div class="mb-10 flex flex-no-wrap overflow-x-auto scrollbar-hide lg:gap-7 lg:px-[50px]">

                <div class="card lg:h h-[80px]  ml-[20px] lg:w-[400px] rounded--xl my-2 bg-white shadow ">
                    <div class="h-full  w-60 lg:w-full  rounded-xl" style="background-image: 
                    url('https://www.consultancy-me.com/illustrations/news/spotlight/2022-09-21-07425900-Deloitte-Consulting-aims-to-break-through-10_000-employees-spot.jpg'); 
                    background-size: cover ; background-position: center ">
                    </div>
                </div>

                <div class="card h-[80px]  ml-[20px] lg:w-[400px] rounded--xl my-2 bg-white shadow ">
                    <div class="h-full  w-60 lg:w-full  rounded-xl" style="background-image: url('https://sokodirectory.com/wp-content/uploads/2015/06/national-bank-of-kenya.png'); 
                    background-size: cover;  background-position: center">
                    </div>
                </div><div class="card h-[80px]  ml-[20px] lg:w-[400px] rounded--xl my-2 bg-white shadow ">
                    <div class="h-full  w-60 lg:w-full  rounded-xl" style="
                    background-image: url('data:image/png;base64,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');
                     background-size: cover; background-position: center">
                    </div>
                </div><div class="card h-[80px]  ml-[20px] lg:w-[400px] rounded--xl my-2 bg-white shadow ">
                    <div class="h-full  w-60 lg:w-full  rounded-xl" style="
                    background-image: url('https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2019/m12/cisco-unveils-plan-for-building-internet-for-the-next-decade-of-digital-innovation/_jcr_content/root/hero.coreimg.jpeg/1639586793412/cisco-corporate-logo-blue2-jpg-1889920-1-0.jpeg');
                     background-size: cover;  background-position: center">
                    </div>
                </div><div class="card h-[80px]  ml-[20px] lg:w-[400px] rounded--xl my-2 bg-white shadow ">
                    <div class="h-full  w-60 lg:w-full  rounded-xl" style="background-image: url('https://bryter.com/wp-content/uploads/2022/12/customer-thumbnail-kpmg-2.png');
                     background-size: cover;  background-position: center">
                    </div>
                </div>
                <div class="card h-[80px]  ml-[20px] lg:w-[400px] rounded--xl my-2 bg-white shadow ">
                    <div class="h-full  w-60 lg:w-full  rounded-xl" style="background-image: url('https://www.internetsociety.org/wp-content/uploads/2017/10/ISOC-logo-white-on-dark-teal-e1682625773935.jpg');
                     background-size: cover;  background-position: center">
                    </div>
                </div>
                
               
                
            </div>

            <!-- Trending Jobs -->
            <div>
                <div class="landing-companies">
                    <div class="flex justify-between items-center p-2  border-gray-300 w-full lg:px-[50px] lg:py-5 ">
                        <div>
                            <div class="flex justify-center items-center gap-3 font-bold text-2xl text-gray-900">Trending Jobs</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap ">
                    <!-- Left side -->
                    <div class="w-full lg:w-[950px] lg:pl-[50px]" >
                        <h1 class="text-xl font-bold ml-3 m-2 text-gray-800 ">Top Searched Jobs</h1>

                       <div class=" bg-white p-3">
                             <!-- Card -->
                        <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                            <div>
                                <div class="icon lg:pl-6 mt-4">
                                    <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                </div>
                            </div>

                            <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                            </div>


                            <div>
                                <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                            </div>

                        </div>

                        

                        <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                            <div>
                                <div class="icon lg:pl-6 mt-4">
                                    <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                </div>
                            </div>

                            <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                            </div>


                            <div>
                                <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                            </div>

                        </div>

                        <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                            <div>
                                <div class="icon lg:pl-6 mt-4">
                                    <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                </div>
                            </div>

                            <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                            </div>


                            <div>
                                <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                            </div>

                        </div>

                        <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                            <div>
                                <div class="icon lg:pl-6 mt-4">
                                    <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                </div>
                            </div>

                            <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                            </div>


                            <div>
                                <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                            </div>

                        </div>

                        <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                            <div>
                                <div class="icon lg:pl-6 mt-4">
                                    <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                </div>
                            </div>

                            <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                            </div>


                            <div>
                                <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                            </div>

                        </div>



                        



                       </div>
                        
                    </div>

                    <div class=" w-[900px] lg:mr-10">
                    
                        <h1 class="text-xl font-bold ml-3 m-2 text-gray-800 ">Top Job Titles 
                            <span></span>
                        </h1>
                        


                       <div class=" bg-white p-3">
                             <!-- Card -->
                             <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                                <div>
                                    <div class="icon lg:pl-6 mt-4">
                                        <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                    </div>
                                </div>
    
                                <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                    <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                    <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                    <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                                </div>
    
    
                                <div>
                                    <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                                </div>
    
                            </div>

                            <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                                <div>
                                    <div class="icon lg:pl-6 mt-4">
                                        <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                    </div>
                                </div>
    
                                <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                    <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                    <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                    <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                                </div>
    
    
                                <div>
                                    <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                                </div>
    
                            </div>


                            <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                                <div>
                                    <div class="icon lg:pl-6 mt-4">
                                        <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                    </div>
                                </div>
    
                                <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                    <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                    <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                    <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                                </div>
    
    
                                <div>
                                    <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                                </div>
    
                            </div>
                            <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                                <div>
                                    <div class="icon lg:pl-6 mt-4">
                                        <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                    </div>
                                </div>
    
                                <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                    <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                    <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                    <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                                </div>
    
    
                                <div>
                                    <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                                </div>
    
                            </div>

                            <div class="card bg-white lg:border-b-0 border-b border-blue-200 mb-2  flex flex-no-wrap">
                                <div>
                                    <div class="icon lg:pl-6 mt-4">
                                        <nuxt-img class="h-12 w-15 lg:h-12 lg:w-12  bg-gray-300 rounded-full "
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                                            ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC" alt="profile pic" style="object-fit: cover; position: center" />
                                    </div>
                                </div>
    
                                <div class="lg:ml-2 p-2 lg:w-[440px] w-[200px]">
                                    <h1 class="lg:text-lg  text-md font-bold text-gray-700 lg:mb-0 mb-3">Senior Software Engineer <span class=" p-2 text-sm bg-blue-100 rounded-xl text-blue-500 ml-4 ">Full Time</span> </h1>
                                    <p class="text-gray-600 text-sm">MasterCard KE . 4h ago</p>
                                    <p class=" text-blue-600 text-sm ">Nairobi, KE</p>
                                </div>
    
    
                                <div>
                                    <div class="lg:text-lgtext-sm p-2 bg-blue-600 text-white rounded-xl mt-5 ml-6 lg:px-5 px-4">Apply Now</div>
                                </div>
    
                            </div>

                        



                       </div>

                    </div>
                </div>
            </div>
            

            <!-- Grow your career -->
            <div class="landing-companies">
                <div class="flex justify-between items-center p-2  border-gray-300 w-full lg:px-[50px] lg:py-5 ">
                    <div>
                        <div class="flex justify-center items-center gap-3 font-bold text-2xl text-gray-900">Grow your career</div>
                    </div>
    
                    <div class="flex items-center gap-3 hover:bg-blue-200  p-2 rounded-2xl">
                        <!-- <Icon icon="carbon:search" width="20" height="20" />
                    <Icon icon="carbon:search" width="20" height="20" /> -->
                        <div class="flex justify-end items-end ">
                            <div class="m- pl-2 w-full h-[60%] text-blue-700  ">
                                <NuxtLink to="/">  <span class="hide">View</span>   All blog posts
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="flex justify-end items-end ">
                            <div class=" w-full h-[60%] text-blue-700 hover:text-white">                        
                                    <Icon icon="ic:outline-arrow-forward-ios" :class="`w-full h-[60%] text-blue-700 hover:text-white`"  width="15" height="15" />                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Scroll to see careers -->
                <div class="mb-10 flex flex-no-wrap overflow-x-auto scrollbar-hide lg:gap-10 lg:px-[50px]">
    
                    <div class="card lg:h-[260px] h-[280px]  ml-[20px] lg:w-[600px] rounded-xl my-2 bg-white shadow ">
                        <div class="h-[100px]  w-60 lg:w-full  rounded-t-xl" style="background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
                        </div>


                        <div class="m-3 mx-5">
                            <div class="flex text-blue-600 flex-no-wrap pb-1">
                                <div class="pt-1">
                                    <Icon icon="teenyicons:clock-outline" width="15" height="15" /> 
                                </div>
                                <div class="ml-2 text-sm">
                                    3 Hrs Ago
                                </div>
                            </div>
                            
                            <h2 class="font-bold text-lg text-gray-800">
                                Get Top Paying Jobs in Kenya
                            </h2>
                            <p class="text-sm text-gray-600">
                                Semaki Allan, KaziQuest
                            </p>
                            <div class="apply p-2 mt-3 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                                Read More
                            </div>
                        </div>
                    </div>

                    <div class="card lg:h-[260px] h-[280px]  ml-[20px] lg:w-[600px] rounded-xl my-2 bg-white shadow ">
                        <div class="h-[100px]  w-60 lg:w-full  rounded-t-xl" style="background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
                        </div>


                        <div class="m-3 mx-5">
                            <div class="flex text-blue-600 flex-no-wrap pb-1">
                                <div class="pt-1">
                                    <Icon icon="teenyicons:clock-outline" width="15" height="15" /> 
                                </div>
                                <div class="ml-2 text-sm">
                                    3 Hrs Ago
                                </div>
                            </div>
                            
                            <h2 class="font-bold text-lg text-gray-800">
                                Get Top Paying Jobs in Kenya
                            </h2>
                            <p class="text-sm text-gray-600">
                                Semaki Allan, KaziQuest
                            </p>
                            <div class="apply p-2 mt-3 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                                Read More
                            </div>
                        </div>
                    </div>

                    <div class="card lg:h-[260px] h-[280px]  ml-[20px] lg:w-[600px] rounded-xl my-2 bg-white shadow ">
                        <div class="h-[100px]  w-60 lg:w-full  rounded-t-xl" style="background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'); background-size: cover;">
                        </div>


                        <div class="m-3 mx-5">
                            <div class="flex text-blue-600 flex-no-wrap pb-1">
                                <div class="pt-1">
                                    <Icon icon="teenyicons:clock-outline" width="15" height="15" /> 
                                </div>
                                <div class="ml-2 text-sm">
                                    3 Hrs Ago
                                </div>
                            </div>
                            
                            <h2 class="font-bold text-lg text-gray-800">
                                Get Top Paying Jobs in Kenya
                            </h2>
                            <p class="text-sm text-gray-600">
                                Semaki Allan, KaziQuest
                            </p>
                            <div class="apply p-2 mt-3 flex justify-center items-center  w-[200px] lg:w-full hover:bg-blue-600 bg-white text-blue-600 border-2 border-blue-600 hover:text-white rounded-lg mb-2x lg:mb-5" style="text-align:center ;">
                                Read More
                            </div>
                        </div>
                    </div>

                    
    
                    
                   
                    
                </div>
        

            <!-- Kaziquest for employers -->
            <div class="mb-10">
                <div class="flex flex-wrap lg:mx-[50px] bg-blue-200  rounded-lg  ">
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
                    <div class="m-10 ml-[600px]  hide  mt-[100px]         ">
                        <Icon icon="flat-color-icons:document" width="155" height="155" />
                    </div>
                </div>
            </div>
       
        
    </section>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    components: {
        Icon,
    },
};
</script>
