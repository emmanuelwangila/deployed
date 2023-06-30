<template>
    <div class="relative" ref="dropdownRef">
        <button @click="toggleDropdown">
            <div class="p-2 border border-gray-200 rounded-lg cursor-pointer">
                <Icon icon="ic:twotone-notification-add" color="#0d6efd" width="30" />
            </div>
        </button>
        <div v-if="isOpen" class="absolute right-0 mt-2 w-[300px] lg:w-[320px] bg-white divide-y divide-gray-100 rounded-md shadow-lg" style="opacity: 1;">

           <div>
            <!-- Notifiation Nav -->
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-5  p-2 lg:p-4">
                <div class="flex flex-wrap pb-2 pl-2 w-3/4  lg:w-[90%]">
                    <label class="w-full font-medium lg:text-lg text-md ">Notifications</label>
                </div>
                <div class="flex flex-wrap pb-2 w-1/4 lg:w-[10%] lg:pl-0 pl-8 pt-1 lg:pt-2">
                    <!-- <label class="w-full font-medium text-lg content-end " style="text-align:right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/><path d="m8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293L5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></g></svg>
                        
                    </label> -->
                   
                </div>
            </div>

            <!-- Notifications list -->

            <!-- List 1 -->
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-2 border-2  hover:bg-blue-100 p-2 lg:p-4">
                
                <div class="flex flex-wrap pb-2 w-1/5  lg:w-1/5 ">
                    <label class="w-full font-medium text-lg pl-1 lg:pl-1 pt-2  text-gray-500 " style="text-align:left">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC"
                        alt="profile pic" style="object-fit: cover; position: center" />
                    </label>
                   
                </div>
                <div class="flex flex-wrap pb-2 w-4/5 pl-2 lg:w-4/5 ">
                    <label class="w-full font-medium  text-sm lg:text-md">Micheal Shenaya applied fo a job</label>
                    <nuxt-link to="/applicants">
                    <label class="w-full font-medium text-sm lg:text-md text-blue-500  cursor-pointer ">Fullstack Software Engineer</label>
                </nuxt-link>
                </div>
                
            </div>

            <!-- List 2 -->
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-2 border-2 hover:bg-blue-100  p-2 lg:p-4">
                
                <div class="flex flex-wrap pb-2 w-1/5  lg:w-1/5 ">
                    <label class="w-full font-medium text-lg pl-1 lg:pl-1 pt-2  text-gray-500 " style="text-align:left">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC"
                        alt="profile pic" style="object-fit: cover; position: center" />
                    </label>
                   
                </div>
                <div class="flex flex-wrap pb-2 w-4/5 pl-2 lg:w-4/5 ">
                    <label class="w-full font-medium  text-sm lg:text-md">Micheal Shenaya applied fo a job</label>
                    <nuxt-link to="/applicants">
                    <label class="w-full font-medium text-sm lg:text-md text-blue-500  cursor-pointer ">Fullstack Software Engineer</label>
                </nuxt-link>
                </div>
                
            </div>

            <!-- List 3 -->
            <div class="w-full flex flex-wrap lg:flex-nowrap lg:gap-2 border-2 hover:bg-blue-100  p-2 lg:p-4">
                
                <div class="flex flex-wrap pb-2 w-1/5  lg:w-1/5 ">
                    <label class="w-full font-medium text-lg pl-1 lg:pl-1 pt-2  text-gray-500 " style="text-align:left">
                        <nuxt-img class="h-8 w-8 lg:h-10 lg:w-10  rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqklEQVR4Ae1WA5RjWRC9jeS/n+7kozm2rXb32rZt27aNRrC2bds2kny11vburbUmY0+dU+chuMVbD4tlsSzU8jOQ9w6gvQfLSKOoMqvUwDSiw10tNrgdxWWvAuE5ApoGlABkw/YoRzNXd3Vjf0+zWlzNutHTzHu4v9VV1gm+btXPTuCCbpRG25XZP9Ds5V3d2t9T9gXUe3zNes5T1ruebn3I89cE/8ZXlsO7FsyqPAAUSojf16LDfHrraPbejjIP8zR7L65bMgrrumFjHXq9EwEv9nQ7oP5IAz+SM2ZFXEBnPoe4mr0ivdo4q1mrZULGRB96n08Rs5njYkmHaBfKijvD1lh+7zJG4TNf2a86yt4aMypHAvkMd0g0DbO/r4xlnVBsSjciPd9kCp7lPaYibyBaQq+Pk3SwNk5/X5n9MP3yW3G50HsF4ZIRH8KOBUCERphyv+SSKMR5I4vROqkU8eoKyJqsj+LIJQv/KM4MjAEEP19C7+olVbwrxPTI1SwwLxotcUOxKidsriEeCzj+kAuWVGitHYN47fZI1J+OeH0cbVwT9btyXyOGvcoUsAtWpp7iKWMZSd90eS1A9Hi4pxvrsXjW9VlsHUCReASRI0eG0VZbh3jD5QTLUAMCO1w9ahbJhmtCzbUT3jDN/tmQuVmgrEaph+nKdYBoqaMZyzu6vberm2tJnv8TtlRjGRINJxGsk153cr2I50MZ/jN4vguJumT0/PphQTRa2qGMAQF6RqartTL8sqNZO7LCT/FZ3R4LSLzGvyVeNYAgNzACXxDwRSRq18P5kweitb4v2urGo7VmIo6cFPmZDkkqp4dQtEzInMA+PVFaxg2ba31smub/gotcVNsL8boUwT+lER9zvZ16FCOxgYBLMTKc+ZgekXyTPJpYpReRqR72lbm1G4vZyCEEiNCAdQl6/+8p+IiGdLMO0jzfw892RzONnJYRHagoymrGcuTnGwmeJpOd+i7sPuL5tAqVRhhoqWtiFxxIAy4j8JM0op37L6mvMhWb4ZSxRTkZLcvWIFffQu8/cZX9Mil1hemaVlczr8115Wiu6Y/zpvRBqmEgQRtZiKdJJGjMR9wfi3OrSqaW80InEptC4KsI/CnXb0iV92bDxaPE+1xsKEXForPRyjDH61plJeDqiNeszS44l4Z8SO1gBA7AGeNN/J8IHXJEnurpJV3s85983f6eg+N56ip
                        ZGJbMc4mEsN07ZD8Zs7wf6IatMe9wr84XjxtS0vM0wuX6Dj1+m2vA+y4pSokI0/T/FC0DgZ6/SuAfaMDPojIsqLdnNXNPn8zHgbMSu2FtVxnb0Ni9yGa7BhxAn5EnrBOZ/0TdKgQ/lYC3oK3hMQI+ziK8nfcnsR2XglD01ER4WUajAP9Nf6IBX9Gwdq5vurr9DLngDq5nsTU3YXpGygiWFEDSdHqt/hsh1Q5G25TxIPOhrWooUhPKcDWZMpfIo0AeB67kXpQPBq6fUbu4f4v3dzjKOlbIiKw4SIaQPD5yEEneby3HdXpEnkXyPJIOYHjvJtANzH8zU7KvzHfxVihZakGKErNbpMCksOShKA9GeTjKA1JCnBt0sSyWhUR+Aas58PKR68arAAAAAElFTkSuQmCC"
                        alt="profile pic" style="object-fit: cover; position: center" />
                    </label>

                    
                   
                </div>
                <div class="flex flex-wrap pb-2 w-4/5 pl-2 lg:w-4/5 ">
                    <label class="w-full font-medium  text-sm lg:text-md">Micheal Shenaya applied fo a job</label>
                    <nuxt-link to="/applicants">
                    <label class="w-full font-medium text-sm lg:text-md text-blue-500  cursor-pointer ">Fullstack Software Engineer</label>
                </nuxt-link>
                </div>
                
            </div>

           </div>
        </div>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    },
    data() {
        return {
            isOpen: false,
        };
    },
    mounted() {
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        closeDropdown() {
            this.isOpen = false;
        },
        handleOutsideClick(event) {
            if (!this.$refs.dropdownRef.contains(event.target)) {
                this.isOpen = false;
            }
        },
    },
};
</script>
  
<style></style>
  