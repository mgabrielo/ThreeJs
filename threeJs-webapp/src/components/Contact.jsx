import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef=useRef()
  const [form, setForm] =useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading, setLoading]= useState(false);
  const handleChange=(e)=>{
    
  }
  const handleSubmit=(e)=>{

  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
            <p className={styles.sectionSubText}>Get In Touch</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>
            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 ">Your Name</span>
                <input type="text" name='name' onChange={handleChange} value={form.name} placeholder="Enter Your Name"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 ">Your Email</span>
                <input type="email" name='email' onChange={handleChange} value={form.email} placeholder="Enter Your email"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 ">Your Message</span>
                <textarea type="text" rows={7} name='message' onChange={handleChange} value={form.message} placeholder="Enter Your message"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
              </label>
              <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
        </motion.div>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]">
          <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')