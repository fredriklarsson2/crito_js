import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img_imageProjectSmall_1 from '../../assets/images/thumbnails/projects/image_project_small_1.png'
import img_imageProjectSmall_2 from '../../assets/images/thumbnails/projects/image_project_small_2.png'
import img_imageProjectSmall_3 from '../../assets/images/thumbnails/projects/image_project_small_3.png'
import img_imageProjectSmall_4 from '../../assets/images/thumbnails/projects/image_project_small_4.png'

const ArticleBox = ({ image, title, link }) => {

    let alt = ''

    const getArticle = () => {
        switch (image) {
            case 'imageProject_1':
                alt = 'man reading a business paper'
                return img_imageProjectSmall_1
            case 'imageProject_2':
                alt = 'pink apple products on a desk'
                return img_imageProjectSmall_2
            case 'imageProject_3':
                alt = 'desk with office supplies'
                return img_imageProjectSmall_3
            case 'imageProject_4':
                alt = 'laptop with business intelligence insights'
                return img_imageProjectSmall_4
            default:
                alt = ''
                return img_imageProjectSmall_1
        }
    }

  return (
    <article>
        <Link to={link}>
            <img src={getArticle()} alt={alt} />
            <h3>{title}</h3>
            Read More <FontAwesomeIcon icon='fa-solid fa-arrow-right' />
        </Link>
    </article>
  )
}

export default ArticleBox