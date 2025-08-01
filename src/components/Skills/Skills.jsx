import React from 'react';
import { FaCss3, FaHtml5, FaReact, FaNodeJs, FaJava, FaNode, FaPython } from "react-icons/fa";
import { SiJavascript, SiMysql, SiFlask, SiMongodb, SiNumpy, SiPandas, SiScipy,SiScikitlearn  } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="h-screen flex flex-col justify-center items-center p-6 md:p-12 ">
      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mb-8 md:mb-20">Skills</h1>
      <div className="bg-gradient-to-b from-gray-800 to-black p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            { Icon: FaHtml5, color: "#F06529" },
            { Icon: FaCss3, color: "#2965F1" },
            { Icon: FaReact, color: "#61DBFB" },
            { Icon: SiJavascript, color: "#F7DF1E" },
            { Icon: FaPython, color: "#3776AB" },
            { Icon: SiMysql, color: "#00758F" },
            { Icon: SiFlask, color:"#FFFFFF" },
            { Icon: FaJava, color:"#D00000"},
            { Icon: FaNode, color: "#00758F" },
            { Icon: SiMongodb, color:"#116149"},
            { Icon:SiNumpy, color:"#013243"},
            { Icon:SiPandas, color:"#6A0DAD"},
            { Icon:SiScipy, color:"#8C1D40"},
            { Icon:SiScikitlearn, color:"#4CAF50"}
          ].map(({ Icon, color }, index) => (
            <span
              key={index}
              className="p-4 bg-zinc-900 flex items-center rounded-2xl hover:bg-gray-700 transition duration-300"
            >
              <Icon color={color} size={50} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
