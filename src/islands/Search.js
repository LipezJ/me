'use client'

import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import Link from "next/link";

import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";

import { blockMainOverflow } from "./functions";

export default function Search() {
  const [ viewResults, setViewResults ] = useState(false);
  const [ searchResults, setSearchResults] = useState(null)
  const ref = useRef(null);

  const prompt = async (e) => {
    if (e.target.value.trim().length > 1) {
      await search(e.target.value)
    } else {
      setSearchResults(null)
    }
  }

  const search = async (searchQuery) => {
    try {
      await fetch('https://meapi.fly.dev/search/' + searchQuery)
      .then((res) => {
        return res.json()
      })
      .then (res => {
        setSearchResults(res)
      })
    } catch (e) {
      setSearchResults(null)
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        blockMainOverflow();
        setViewResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="isearch" onClick={() => {
        setViewResults(!viewResults)
        blockMainOverflow()
      }}>
        Search...
      </div>
      {
        viewResults &&
        <div className="search_cont">
          <div className="search" ref={ref}>
            <div className="isearch_cont">
              <input autoFocus className="isearch search_i" type="text" placeholder="Search..." onChange={prompt} />
            </div>
            <div className="search_results" style={{"max-height": "100%"}}>
              <h2>Results:</h2>
              {
                searchResults &&
                <>
                  <div className="search_results_blogs">
                    <h3>Blogs</h3>
                    {searchResults.blogsQuery &&
                      searchResults.blogsQuery.map((blog, index) => {
                        return (
                          <Link className='blog_card' href={'/blog/' + blog.name} onClick={() => setViewResults(!viewResults)} key={index}>
                            <BlogCard key={index} blog={blog} />
                          </Link>
                        )
                      })}
                  </div>
                  <div className="search_results_projects">
                    <h3>Projects</h3>
                    {searchResults.projectsQuery &&
                      searchResults.projectsQuery.map((project, index) => {
                        return (
                          <ProjectCard {...project} key={index} />
                        )
                      })}
                  </div>
                </>
              }
            </div> 
          </div>
          <div className="back_search">
            <FaAngleDoubleUp onClick={() => setViewResults(!viewResults)} />
          </div>
        </div>
      }
    </>
  )

}